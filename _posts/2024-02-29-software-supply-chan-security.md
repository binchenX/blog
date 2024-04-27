---
layout: post
title:  "Software Supply Chain Security"
categories: Tech
---

## Terms

- Attestation

> A software attestation is an authenticated statement (metadata) about a software artifact or collection of software artifacts. Software attestations are a generalization of raw artifact/code signing.

- Proverence 

> It’s the verifiable information about software artifacts describing where, when and how something was produced. Proverence is a one specificial case of Attenstation. 

- SBOM

> SBOM is a detailed list of components and dependencies that make up a software application. It is a special case of Proverence.

## From SDLC, to CI/CD , to Software Supply Chain Security

SDLC offers a comprehensive view of the software journey, while CI/CD pipelines focus on efficient code delivery.

The software supply chain emphasizes sourcing, integrating, and delivering components securely. The primary goal of software supply chain security is to ensure the security and reliability of software components, especially as they traverse through different stages from development to deployment.

Securing the software supply chain involves addressing threats at various stages of the Software Development Lifecycle (SDLC) and throughout the CI/CD pipeline. Understanding and mitigating potential attack points is crucial for maintaining a robust security posture. [This page](https://slsa.dev/spec/v1.0/threats-overview) provides a good overview of the threats in different stages of the supply chain.

SDLC is a topic dating back to 1980, while CI/CD emerged around 2010, and Software Supply Chain Security became prominent around 2020.

In this article, I will outline the major players in the software supply chain security ecosystem, including frameworks, standardization, and tools. For each player, I will lay out the problem it focuses on solving and its interaction with other technologies. I will present these technologies in chronological order to establish a sense of order.

## Software Bill of Materials (SBoM)

The concept of Software Bill of Materials (SBoM) dates back as early as 2000. SBOM is a detailed list of components and dependencies that make up a software application. The primary focus of SBOM is to increase transparency regarding the components and dependencies in a software project. It also assists in identifying and managing vulnerabilities by providing a clear inventory of software components.

We can consider SBOM as the dawn of Software Supply Chain Security. In May 2021, the U.S. government issued an Executive Order requiring all software provided to the U.S. government to have an SBOM.

## The Update Framework (TUF)

The Update Framework (TUF) is a framework designed around 2010 to guard software update systems against key compromise. It uses a decentralized trust model, distributing trust across multiple roles.

It's worth noting that TUF is not the update system itself but a tool you can integrate with an existing update system. Despite the name, TUF is not limited to update systems but can be used in any system that wants to minimize the risk of key compromise. For example, Sigstore, which we will discuss later, used TUF to [generate and verify Sigstore trust root keys](https://github.com/sigstore/root-signing).

## In-Toto

In-toto is an open-source project initiated at NYU in 2018. It defines a model that can describe and verify end-to-end software supply chain security. The model describes who owns what at each step along the chain. The highest-level structure is called a *layout*. To describe each phase, it has *steps*. For each step, there is a corresponding attestation. In-toto also defines the steps for the final product verification.

To know more, you can read about [in-toto: Providing farm-to-table guarantees for bits and bytes](https://www.usenix.org/system/files/sec19-torres-arias.pdf).

## Sigstore & Cosign

**Sigstore** is a software signing tool that makes it easy to implement artifact signing. It was [announced](https://www.linuxfoundation.org/press/press-release/linux-foundation-announces-free-sigstore-signing-service-to-confirm-origin-and-authenticity-of-software) in March 2021 by the Linux Foundation.

> Sigstore improves the security of the software supply chain by enabling the easy adoption of cryptographic software signing backed by transparency log technologies.

It uses a protocol similar to ACME (used by Let's Encrypt) to authenticate developers through OIDC, uses TUF as the root of trust, and issues ephemeral certificates. It is often also referred to as keyless signing. Cosign also publishes identity logs and certificate logs for audit purposes, improving security through transparency. These logs are a concrete implementation of the general transparent log concept, whose public accessibility allows the detection and prevention of security compromises. Certificate transparent log is another implementation of the transparent log mechanism.

We can consider Sigstore as the UX improvement for code signing to minimize adoption barriers and improve the adoption of code signing. Its scope is narrower than In-toto, which focuses on end-to-end supply chain security, and SLSA, which focuses on defining the guidelines for requirements at each level.

For details, read [Sigstore: Software Signing for Everybody](https://dl.acm.org/doi/pdf/10.1145/3548606.3560596).

**Cosign** is part of Sigstore; it serves as a tool for signing and verifying container images, simplifying the process of applying and validating cryptographic signatures. To sign the image, it first uses *syft* to generate SBOM container images and then performs cryptographic signing.

## Supply Chain Levels for Software Artifacts (SLSA)

Google introduced SLSA in [a blog in June 2021](https://security.googleblog.com/2021/06/introducing-slsa-end-to-end-framework.html).

The most important clarification you should have is what SLSA is NOT. SLSA is not a "thing" like SBOM, nor is it a tool like Cosign.

SLSA is a set of incrementally adoptable **guidelines** for supply chain security. One analogy is that SLSA is to supply chain security as CMMI is to software development process maturity. With that clarification, you can read about the [4 levels in SLSA](https://slsa.dev/spec/v1.0/levels#levels-and-tracks) and [its requirements for each level](https://slsa.dev/spec/v1.0/requirements).

SLSA also defines a set of specifications or models to facilitate implementation to achieve those requirements. It defines the [attestation model](https://slsa.dev/attestation-model) and the [provenance format](https://slsa.dev/spec/v1.0/provenance). The former defines the model to represent any software attestations, regardless of format. The model also [recommends the tools or standards](https://slsa.dev/attestation-model#recommended-suite) (called *suite*) for each part of the model. For example, for the attestation statement, the in-toto attestation specification is recommended. The provenance format defines a specific predicate type defined by the in-toto attestation specification. The provenance format is used to implement the build provenance as required by SLSA level 1.

SLSA defines the [attestation model](https://slsa.dev/attestation-model) or the specification for what attestation format, both syntax and semantics, to allow interoperability. As mentioned above, an attestation is a generation of the action performed, such as source code checked out, code review, build, and test. It is called PredicateType in both SLSA and in-toto specifications, and SLSA recommends using the [in-toto attestation framework](https://github.com/in-toto/attestation/blob/main/spec/README.md#in-toto-attestation-framework-spec) for the refined and vetted predicate. [Efforts have been made](https://github.com/adityasaky/ITE/blob/4a54f2682225651ba2eed991742f17bba3329aff/ITE/6/README.md) in in-toto to expand the original fixed predicates (which are called links) to allow for collaboration or synergy between in-toto and SLSA attestation models. SLSA provenance is a concrete type of predicate type.

## Summary

I will conclude the post with a diagram that describes the players mentioned above and their relationships.

![slsa]({{ site.baseurl }}/assets/slsa.png)
  
[Sigstore]: https://dl.acm.org/doi/pdf/10.1145/3548606.3560596
[TUF]: https://ssl.engineering.nyu.edu/papers/samuel_tuf_ccs_2010.pdf
[in-toto]: https://www.usenix.org/system/files/sec19-torres-arias.pdf