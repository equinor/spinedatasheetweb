# Spine Datasheet Web

## Spine Datasheet

- Product owner: 
- Business area: 

## Summary Description

Datasheet is a Fusion application that lets the user view datasheets and review tag data from Spine.

## Runbook

[Runbook](https://github.com/equinor/spinedatasheetapi/blob/main/documentation/runbook.md) is found in the backend repo.

## Architechture

The application is split between the [frontend app](#frontend) hosted in Fusion, and the [backend app](#backend) hosted in Radix. Authentication is based on [RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview), where we have different app registrations for preproduction and production with are consented to access Fusion Preprod or Fusion Prod. 



### Security

Snyk surveillance has been added to the project for continuous monitoring of the code and its dependency. 

### Azure App Config

Azure App Configuration provides a service to centrally manage application settings and feature flags. It allows us to change configuration directly in Azure for all environments. Combined with Azure Key Vault it also combines a secure place to store secrets and connection strings.

### Omnia Radix

[Omnia Radix](https://console.radix.equinor.com/applications/datasheet) is a Equinor PaaS (Platform as a Service) based on AKS to build and run docker containers. You can either make Radix build your container directly, or pull the container from a container registry. For Spine Datasheet API the image is built in [Github Actions](#githubactions), and pushed to [Azure Container Registry](#azure-container-registry). Radix pulls the image corresponding to release stage.

Configuration of the required infrastructure is placed in a radixconfig.yml, which defines the different components and environments which are created. Runtime variables and secrets are also defined in radixconfig.yml. The DCD config is placed in a separate [git repo](https://github.com/equinor/dcd-radix-conf).

## API

The backend is dotnet webapi built with .NET 6 which provides a REST interface for the frontend. Swagger has been installed to provide documentation for the API, and to test functions. The backend retrieves and stores data in a Azure SQL Database for each environment. 

## Development

### Team
Spine Datasheet API is developed by the It's a Feature team in TDI EDT DSD EDB. 

### Repository


### Build and Release

## Architecture Diagrams

The following diagrams have been created using PlantUML.

### System Context Diagram

System context diagram for the Spine Datasheet application.


### Container Diagram

Container diagram for the Spine Datasheet application.


## Access to application and data - UNDER CONSTRUCTION

AD groups that can view data (AccessIT groups work in progress)
|Name|Description|User types|How to check|
|-|-|-|-|

### Admin Consent Decision Matrix



## notes and links
[Abbreviation examples for Azure resources](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations) 
[Conventional Commits](https://www.conventionalcommits.org/)
[Semantic Versioning](https://semver.org/)