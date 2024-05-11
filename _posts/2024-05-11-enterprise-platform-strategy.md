---
layout: post
title:  "Enterprise Platform Strategy"
categories: Managment
---

> This is a sequel to [Build and Scale Platform Product](https://www.devicu.com/blog/build-scale-platform-product).

You work in a large enterprise[^1] and you are tasked with coming up with the platform strategy.
 
There are a bunch of decisions that need to be made. There are no right answers, only conscious decisions after thoroughly considering the goals, constraints, and trade-offs.

## Siloed vs Centeralized

In a **siloed structure**[^2], each business unit chooses to implement platforms to maximize individual business unit needs.

The term 'silo' often carries negative connotations of being uncollaborative. However, it is the best and sometimes the only way to initiate something from scratch. The effort required to coordinate across business units can be too costly, potentially stalling progress entirely. 

'Two platforms are better than none.' Attempting to centralize when you have nothing it a premature optimization.

## Single platform vs Multiple platform

Actually a single platform may not cut. You will need multiple platforms. There are different ways you can categorize these platforms.

- Per BU (organization structure boundary)
- Per criticality (tie 0, tie 1 and tie 2)
- Per user cases (Data, Application, AI/ML). 
- Per compute technology (virtual machine vs container vs serveless). 

## Standardization vs Centralization

**Standardization** involves establishing standards on various aspects of the software development lifecycle, including programming languages, frameworks, tools, and processes across the organization. The goal is to reduce technology fragmentation and promote the easy adoption of best practices. For example, Google has standardized Java, C++, Golang, and Python as approved languages for internal use.

**Centralization** involves a designated team building and running a platform. For instance, a centralized logging platform requires you to send your logs exclusively to that platform. Another example is a centralized cyber and security department. While centralization avoids duplicated effort in the enterprise, It needs to solve the depedency issue in the initial stage and the [scalability challenge](https://www.devicu.com/blog/build-scale-platform-product#scalability-from-1-to-100) in the late stage.

While centralization can enhance standardization, standardization does not necessarily require centralization. If you encounter resistance to centralization efforts, consider standardization instead. 

## Funding 

IT strategy and architecture is not purely an outcome of technical decisions, but more of a socio-technical outcome.

Conway's Law is well-known: organizational structure impacts IT structure.

What is less discussed is how the funding structure impacts the IT structure. One might argue that the funding model is parallel to and determined by the organizational structure. However, this is not always the case. The funding model can change while keeping the organizational structure the same. The funding model impacts the resources you have to develop your platform, which stakeholders and use cases to prioritize, and the [adoption](#platform-adoption---carrot-or-stick) and price of your product.

## Pricing: Charge or not

Your product inherently has build and run costs that need to be covered in one way or another. Otherwise, your product is not sustainable. These expenses are not trivial. For example, the human resource cost alone for a team of ten engineers could be roughly 2 million per year. 

Whether and how much you charge your customers depends on your [funding model](#funding) and product strategy.

Even if your product is covered by central and dedicated funding, you might still want to charge your customers to encourage *responsible usage*. 

For instance, it is very common to see the cost of a centralized logging system spiral out of control because users will just send logs that are rarely used to the logging system since they don't have to pay for it. To solve this issue, instead of the centralized team chasing application teams to optimize their logging, you could charge users based on the volume of logs they send. 

This approach can help avoid the [tragedy of the commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons) by giving each user a stake in the cost of the product. Establishing clear boundaries and accountability for the cost is one of the best strategies for implementing FinOps.

## Adoption: Carrot or Stick

I believe we should not enforce the adoption of a platform. A platform should be adopted voluntarily by your customers because they find it useful. This may be especially true for engineering platforms. Engineers find it physically impossible to be forced to use a tool or a platform that is difficult to use, especially when they know there is a better way of doing things. They simply can't. When you lose your customer's heart, you can't force their hands.

However, enforcement can be critical if you want to consoliate the seven CI/CD tools you have to the strategical one. 

But, before you choose, design, and enforce anything, be sure to [ask your developers](https://www.amazon.com/Ask-Your-Developer-Software-Developers/dp/0063018292), not just your leadership team.

## Operating: Build it vs Run it

The mantra "Build it and run it" is widely accepted in DevOps, and rightly so. However, when it comes to platforms, there is another option.

I refer to this as the **open-source model**. In this model, you develop tools and process, that others can use and run. It's akin to obtaining an open-source package and running it yourself.  A concrete example could be providing SDKs to allow [stream-aligned teams](https://teamtopologies.com/key-concepts) to spin up a fully functional production Kubernetes cluster and provide SOPs for all the operations fully validated by centralized platform team.

It is important to know you still run it as a product, in the same way Kubernetes and Linux are managed as products. 

The benefit of this model is its scalability. You don't rely on a centralized platform to build AND run. It makes the responsibility model clearer. We can refer to this as a **federated** model, an addition to the siloed and centralized models. It's also a case of **standardization**. The platform team standardizes the best practices and compliance into the package, allowing the consumer to use it without reinventing the wheel.

However, this model does require that the consumers have the capability to run the service.

## Car as a platform

When considering your platform strategy in an enterprise, we can draw a few insights from car industry.

- You build cars for your customer. They will not buy it unless they like it. 
- Different customers need different cars for their [distinct jobs to be done](https://www.amazon.com.au/Jobs-be-Done-Theory-Practice/dp/B0CCZV8JJH/). 
- There is great value in building **engines** and **tyres** that can be fitted into cars of different shapes and colors. Whatever you build, ensure it is solid, composable, and interoperable.

## Summary

- Two platforms are better than none. 
- You need more than one platform.
- You can centralize or standardize.
- You probally should charge your product.
- Carrots go further than sticks.
- You can build it and let others operate it.
- Build the engines and tyres that allows others to build the cars.

---

[^1]: A typical structure: At the top level, there is a technology group that reports to the CIO, and there are several business units (BUs), each with its own executives. Both the CIO and group executives report to the CEO. Within these BUs, there may be a split between business and IT functions. Inside the technology group, there are different domains. Some are closely tied to BUs, while others are foundational areas such as networking and cybersecurity.

[^2]: I used to refer to this mode as 'distributed'. However, I realized that in a distributed system, there is a purposefully designed communication protocol between the components to achieve a predefined goal. While in siloed mode, it is often "They don't talk to each other". The term 'siloed' was adopted from the book [Enterprise Architecture as Strategy](https://www.amazon.com.au/Enterprise-Architecture-Strategy-Foundation-Execution/dp/1591398398/), which considers a siloed architecture as the first phase of enterprise architecture.
