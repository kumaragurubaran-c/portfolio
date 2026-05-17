import { Injectable } from '@angular/core';
import { Skill, Project, ContactDetails, NavLink } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getNavLinks(): NavLink[] {
    return [
      { label: 'Skills', fragment: 'skills' },
      { label: 'Experience', fragment: 'experience' },
      { label: 'Projects', fragment: 'projects' },
      { label: 'Contact', fragment: 'contact' },
    ];
  }

  getSkills(): Skill[] {
    return [
      {
        name: 'Angular',
        icon: '/angular.png',
        description: 'Component-based SPAs, RxJS, NgRx state management, lazy loading & standalone components',
        accentColor: '#dd0031',
      },
      {
        name: 'Spring Boot',
        icon: '/spring-boot.png',
        description: 'REST APIs, Spring Security, JPA/Hibernate, actuator, reactive WebFlux streams',
        accentColor: '#6db33f',
      },
      {
        name: 'Java',
        icon: '/java.png',
        description: 'Java 17+, concurrency, streams, design patterns, JVM performance tuning',
        accentColor: '#f89820',
      },
      {
        name: 'MySQL',
        icon: '/mysql.png',
        description: 'Schema design, indexing strategies, query optimization, stored procedures',
        accentColor: '#8E1A8A',
      },
      {
        name: 'Apache Kafka',
        icon: '/apache-kafka.png',
        description: 'Event streaming, producers/consumers, topic partitioning, Kafka Streams topology',
        accentColor: '#00d2ff',
      },
      {
        name: 'Microservices',
        icon: '/microservices.png',
        description: 'Domain-driven design, API gateway, service mesh, Saga pattern, circuit breakers',
        accentColor: '#7c3aed',
      },
      {
        name: 'Postman',
        icon: '/postman-inc.png',
        description: 'API testing, request automation, environment management, and REST API debugging',
        accentColor: '#F8B226',
      },
      {
        name: 'GitLab',
        icon: '/gitlab.png',
        description: 'Git-based source control, CI/CD pipelines, merge requests, and automated DevOps workflows',
        accentColor: '#47F5B8',
      },
      {
        name: 'Azure',
        icon: '/azure-devops.png',
        description: 'AKS, Azure Functions, Service Bus, Cosmos DB, DevOps CI/CD pipelines',
        accentColor: '#827626',
      },
      {
        name: 'Docker',
        icon: '/docker.png',
        description: 'Containerization, Helm charts, HPA, rolling deployments, observability stack',
        accentColor: '#02A778',
      },
      {
        name: "Kubernetes (K8s)",
        icon: "/kubernetes.png",
        description: "Container orchestration, automated scaling, self-healing pods, rolling deployments, and cluster management",
        accentColor: "#326CE5",
      }
    ];
  }

  //   getExperiences(): Experience[] {
  //     return [
  //       {
  //         period: '2022 – Present',
  //         role: 'Senior Full Stack Engineer',
  //         company: 'Tech Corp',
  //         location: 'Bangalore, India',
  //         description:
  //           'Architected event-driven microservices handling 2M+ events/day using Kafka and Spring Boot. Led Angular 16 migration reducing load time by 45%. Mentored a team of 4 junior developers.',
  //         tags: ['Angular 16', 'Spring Boot', 'Kafka', 'Azure AKS', 'MySQL'],
  //       },
  //       {
  //         period: '2020 – 2022',
  //         role: 'Full Stack Developer',
  //         company: 'Startup Labs',
  //         location: 'Remote',
  //         description:
  //           'Built end-to-end fintech SaaS features. Designed RESTful APIs with Spring Security JWT auth and Angular dashboard consuming real-time data via WebSockets.',
  //         tags: ['Angular', 'Java 11', 'Spring Security', 'MySQL', 'Docker'],
  //       },
  //       {
  //         period: '2018 – 2020',
  //         role: 'Java Backend Developer',
  //         company: 'IT Solutions Inc.',
  //         location: 'Chennai, India',
  //         description:
  //           'Developed microservices for an e-commerce platform using Spring Boot and Hibernate. Optimized critical MySQL queries reducing P95 response time from 800ms to under 90ms.',
  //         tags: ['Spring Boot', 'Java 8', 'Hibernate', 'MySQL', 'REST API'],
  //       },
  //     ];
  //   }

  getProjects(): Project[] {
    return [
      {
        number: '01',
        category: 'Cloud Platform',
        title: 'Real-Time Analytics Dashboard',
        description:
          'Angular-powered dashboard consuming Kafka streams via Spring WebFlux SSE. Visualizes 100K+ events/min with sub-second latency on Azure AKS.',
        stack: ['Angular 17', 'Spring WebFlux', 'Kafka', 'Azure AKS'],
      },
      {
        number: '02',
        category: 'Microservices',
        title: 'Distributed Order Management',
        description:
          'Event-sourced microservices architecture with 12 independent services, Kafka event bus, and Saga pattern for distributed transactions.',
        stack: ['Spring Boot', 'Kafka', 'MySQL', 'Docker', 'Kubernetes'],
      },
      {
        number: '03',
        category: 'Enterprise SaaS',
        title: 'Multi-Tenant HR Portal',
        description:
          'Angular 16 + NgRx SPA with role-based access control and Spring Boot microservices for payroll, leave, and appraisal management.',
        stack: ['Angular', 'NgRx', 'Java', 'Spring Security', 'MySQL'],
      },
      {
        number: '04',
        category: 'DevOps & Azure',
        title: 'CI/CD Automation Pipeline',
        description:
          'Azure DevOps pipelines automating build, test, and deployment of 8 Spring Boot microservices with blue-green deployment strategy.',
        stack: ['Azure DevOps', 'Helm', 'Docker', 'Spring Boot'],
      },
      {
        number: '05',
        category: 'Event Streaming',
        title: 'Notification & Alerting Engine',
        description:
          'Kafka Streams topology processing 5M daily events, routing alerts via email/SMS/push with dead-letter topics and retry mechanisms.',
        stack: ['Kafka Streams', 'Spring Boot', 'Azure Service Bus', 'MySQL'],
      },
      {
        number: '06',
        category: 'API Design',
        title: 'API Gateway & Auth Service',
        description:
          'Centralized API gateway with Spring Cloud Gateway, OAuth2 + JWT, rate limiting, Resilience4j circuit breakers, and Micrometer observability.',
        stack: ['Spring Cloud', 'OAuth2 / JWT', 'Resilience4j', 'Azure'],
      },
    ];
  }

  getContacts(): ContactDetails {
    return {
      email: 'guruaero94@gmail.com',
      location: 'Chennai',
      number: '9566046121'
    };
  }

}
