---
layout: post
title:  "Cloud Well-Architected Cheat Sheet"
categories: Tech
---

All major clouds' well-architected documentation are fantastic resources for building and running cloud applications and platforms. It deserves a cheat sheet.

|              | Operational Excellence                                                                                                                                                      | Security                                                                                                                                                          | Reliability                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Azure        | [Embrace DevOps culture](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#embrace-devops-culture)                                 | [Plan your security readiness](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#plan-your-security-readiness)                         | [Design for business requirements](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-business-requirements)                  |
|              | [Establish development standards](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#establish-development-standards)               | [Design to protect confidentiality](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#design-to-protect-confidentiality)               | [Design for resilience](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-resilience)                                        |
|              | [Evolve operations with observability](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#evolve-operations-with-observability)     | [Design to protect integrity](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#design-to-protect-integrity)                           | [Design for recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-recovery)                                            |
|              | [Deploy with confidence](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#deploy-with-confidence)                                 | [Design to protect availability](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#design-to-protect-availability)                     | [Design for operations](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-operations)                                        |
|              | [Automate for efficiency](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#automate-for-efficiency)                               | [Sustain and evolve your security posture](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#sustain-and-evolve-your-security-posture) | [Keep it simple](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#keep-it-simple)                                                      |
|              | [Adopt safe deployment practices](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#adopt-safe-deployment-practices)               |                                                                                                                                                                   |                                                                                                                                                                       |
| Google Cloud | [Operational Excellence](https://cloud.google.com/architecture/framework/operational-excellence)                                                                            | [Security](https://cloud.google.com/architecture/framework/security)                                                                                              | [Reliability](https://cloud.google.com/architecture/framework/reliability)                                                                                            |
|              | [Automate your deployments](https://cloud.google.com/architecture/framework/operational-excellence/automate-your-deployments)                                               | [Review shared responsibility and shared fate on Google Cloud](https://cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate)        | [Understand the core reliability principles](https://cloud.google.com/architecture/framework/reliability/principles)                                                  |
|              | [Set up monitoring, alerting, and logging](https://cloud.google.com/architecture/framework/operational-excellence/set-up-monitoring-alerting-logging)                       | [Understand security principles](https://cloud.google.com/architecture/framework/security/security-principles)                                                    | [Define your reliability goals](https://cloud.google.com/architecture/framework/reliability/define-goals)                                                             |
|              | [Establish cloud support and escalation processes](https://cloud.google.com/architecture/framework/operational-excellence/establish-cloud-support-and-escalation-processes) | [Manage risks with controls](https://cloud.google.com/architecture/framework/security/risk-management)                                                            | [Define SLOs](https://cloud.google.com/architecture/framework/reliability/defining-SLOs)                                                                              |
|              | [Manage capacity and quota](https://cloud.google.com/architecture/framework/operational-excellence/manage-capacity-and-quota)                                               | [Manage your assets](https://cloud.google.com/architecture/framework/security/asset-management)                                                                   | [Adopt SLOs](https://cloud.google.com/architecture/framework/reliability/adopting-slos)                                                                               |
|              | [Plan for peak traffic and launch events](https://cloud.google.com/architecture/framework/operational-excellence/plan-for-peak-traffic-and-launch-events)                   | [Manage identity and access](https://cloud.google.com/architecture/framework/security/identity-access)                                                            | [Build observability into your infrastructure and application](https://cloud.google.com/architecture/framework/reliability/observability-infrastructure-applications) |
|              | [Create a culture of automation](https://cloud.google.com/architecture/framework/operational-excellence/create-a-culture-of-automation)                                     | [Implement compute and container security](https://cloud.google.com/architecture/framework/security/compute-container-security)                                   | [Design for scale and high availability](https://cloud.google.com/architecture/framework/reliability/design-scale-high-availability)                                  |
|              |                                                                                                                                                                             | [Secure your network](https://cloud.google.com/architecture/framework/security/network-security)                                                                  | [Create reliable operational processes and tools](https://cloud.google.com/architecture/framework/reliability/create-operational-processes-tools)                     |
|              |                                                                                                                                                                             | [Implement data security](https://cloud.google.com/architecture/framework/security/data-security)                                                                 | [Build efficient alerts](https://cloud.google.com/architecture/framework/reliability/build-efficient-alerts)                                                          |
|              |                                                                                                                                                                             | [Deploy applications security](https://cloud.google.com/architecture/framework/security/app-security)                                                             | [Build a collaborative incident management process](https://cloud.google.com/architecture/framework/reliability/build-incident-management-process)                    |
|              |                                                                                                                                                                             | [Manage compliance obligations](https://cloud.google.com/architecture/framework/security/compliance)                                                              |                                                                                                                                                                       |
|              |                                                                                                                                                                             | [Implement data residency and sovereignty requirements](https://cloud.google.com/architecture/framework/security/data-residency-sovereignty)                      |                                                                                                                                                                       |
|              |                                                                                                                                                                             | [Implement privacy requirements](https://cloud.google.com/architecture/framework/security/privacy)                                                                |                                                                                                                                                                       |
|              |                                                                                                                                                                             | [Implement logging and detective controls](https://cloud.google.com/architecture/framework/security/logging-detection)                                            |                                                                                                                                                                       |
| AWS          | [Operation Excellence](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/operational-excellence.html#design-principles)                      | [Security](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/security.html#design-principles)                                                    | [Reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html)                                                           |
|              | Perform operations as code                                                                                                                                                  | Implement a strong identity foundation                                                                                                                            | Automatically recover from failure                                                                                                                                    |
|              | Make frequent, small, reversible changes                                                                                                                                    | Maintain traceability                                                                                                                                             | Test recovery procedures                                                                                                                                              |
|              | Refine operations procedures frequently                                                                                                                                     | Apply security at all layers                                                                                                                                      | Scale horizontally to increase aggregate workload availability                                                                                                        |
|              | Anticipate failure                                                                                                                                                          | Automate security best practices                                                                                                                                  | Stop guessing capacity                                                                                                                                                |
|              | Learn from all operational failures                                                                                                                                         | Protect data in transit and at rest                                                                                                                               | Manage change through automation                                                                                                                                      |
|              | Use managed services                                                                                                                                                        | Keep people away from data                                                                                                                                        |                                                                                                                                                                       |
|              | Implement observability for actionable insights                                                                                                                             | Prepare for security events                                                                                                                                       |                                                                                                                                                                       |


<details markdown='1'>
<summary>Click here for markdown text</summary>

Prompt to copilot:

> Turn the #selection into a Markdown table, with "##" as the first column and "###" headings as the following columns.
Do it for each cloud and then concatenate them.

## [AWS](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)

### [Operation Excellence](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/operational-excellence.html#design-principles)
  
- Perform operations as code
- Make frequent, small, reversible changes
- Refine operations procedures frequently
- Anticipate failure
- Learn from all operational failures
- Use managed services
- Implement observability for actionable insights

### [Reliability](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html)
  
- Automatically recover from failure
- Test recovery procedures
- Scale horizontally to increase aggregate workload availability
- Stop guessing capacity
- Manage change through automation

### [Security](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/security.html#design-principles)

- Implement a strong identity foundation
- Maintain traceability
- Apply security at all layers
- Automate security best practices
- Protect data in transit and at rest
- Keep people away from data
- Prepare for security events

### [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)

## [Operational Excellence](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles)

- [Embrace DevOps culture](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#embrace-devops-culture)
- [Establish development standards](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#establish-development-standards)
- [Evolve operations with observability](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#evolve-operations-with-observability)
- [Deploy with confidence](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#deploy-with-confidence)
- [Automate for efficiency](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#automate-for-efficiency)
- [Adopt safe deployment practices](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles#adopt-safe-deployment-practices)

### [Reliability](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles)

- [Design for business requirements](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-business-requirements)
- [Design for resilience](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-resilience)
- [Design for recovery](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-recovery)
- [Design for operations](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#design-for-operations)
- [Keep it simple](https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles#keep-it-simple)

### [Security](https://learn.microsoft.com/en-us/azure/well-architected/security/principles)

- [Plan your security readiness](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#plan-your-security-readiness)
- [Design to protect confidentiality](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#design-to-protect-confidentiality)
- [Design to protect integrity](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#design-to-protect-integrity)
- [Design to protect availability](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#design-to-protect-availability)
- [Sustain and evolve your security posture](https://learn.microsoft.com/en-us/azure/well-architected/security/principles#sustain-and-evolve-your-security-posture)

## [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)

### [Operation Excellence](https://cloud.google.com/architecture/framework/operational-excellence)
  
- [Automate your deployments](https://cloud.google.com/architecture/framework/operational-excellence/automate-your-deployments)
- [Set up monitoring, alerting, and logging](https://cloud.google.com/architecture/framework/operational-excellence/set-up-monitoring-alerting-logging)
- [Establish cloud support and escalation processes](https://cloud.google.com/architecture/framework/operational-excellence/establish-cloud-support-and-escalation-processes)
- [Manage capacity and quota](https://cloud.google.com/architecture/framework/operational-excellence/manage-capacity-and-quota)
- [Plan for peak traffic and launch events](https://cloud.google.com/architecture/framework/operational-excellence/plan-for-peak-traffic-and-launch-events)
- [Create a culture of automation](https://cloud.google.com/architecture/framework/operational-excellence/create-a-culture-of-automation)


### [Reliability](https://cloud.google.com/architecture/framework/reliability)

- [Understand the core reliability principles](https://cloud.google.com/architecture/framework/reliability/principles)
- [Define your reliability goals](https://cloud.google.com/architecture/framework/reliability/define-goals)
- [Define SLOs](https://cloud.google.com/architecture/framework/reliability/defining-SLOs)
- [Adopt SLOs](https://cloud.google.com/architecture/framework/reliability/adopting-slos)
- [Build observability into your infrastructure and application](https://cloud.google.com/architecture/framework/reliability/observability-infrastructure-applications)
- [Design for scale and high availability](https://cloud.google.com/architecture/framework/reliability/design-scale-high-availability)
- [Create reliable operational processes and tools](https://cloud.google.com/architecture/framework/reliability/create-operational-processes-tools)
- [Build efficient alerts](https://cloud.google.com/architecture/framework/reliability/build-efficient-alerts)
- [Build a collaborative incident management process](https://cloud.google.com/architecture/framework/reliability/build-incident-management-process)

### [Security](https://cloud.google.com/architecture/framework/security)

- [Review shared responsibility and shared fate on Google Cloud](https://cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate)
- [Understand security principles](https://cloud.google.com/architecture/framework/security/security-principles)
- [Manage risks with controls](https://cloud.google.com/architecture/framework/security/risk-management)
- [Manage your assets](https://cloud.google.com/architecture/framework/security/asset-management)
- [Manage identity and access](https://cloud.google.com/architecture/framework/security/identity-access)
- [Implement compute and container security](https://cloud.google.com/architecture/framework/security/compute-container-security)
- [Secure your network](https://cloud.google.com/architecture/framework/security/network-security)
- [Implement data security](https://cloud.google.com/architecture/framework/security/data-security)
- [Deploy applications security](https://cloud.google.com/architecture/framework/security/app-security)
- [Manage compliance obligations](https://cloud.google.com/architecture/framework/security/compliance)
- [Implement data residency and sovereignty requirements](https://cloud.google.com/architecture/framework/security/data-residency-sovereignty)
- [Implement privacy requirements](https://cloud.google.com/architecture/framework/security/privacy)
- [Implement logging and detective controls](https://cloud.google.com/architecture/framework/security/logging-detection)
</details>
