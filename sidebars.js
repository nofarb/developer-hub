// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  allcontent: [

    //Tutorial Parent
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "doc",
        id: "tutorials/intro",
      },
      collapsed: false,
      items: [
        // Build Code
        {
          type: "category",
          label: "Build Code",
          link: {
            type: "doc",
            id: "tutorials/build-code",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "tutorials/build-code" }],
        },

        // Deploy Services
        {
          type: "category",
          label: "Deploy Services",
          link: {
            type: "doc",
            id: "tutorials/deploy-services",
          },
          collapsed: true,
          items: [
            { type: "autogenerated", dirName: "tutorials/deploy-services" },
          ],
        },

        // Manage Feature Flags - feature-flags
        {
          type: "category",
          label: "Manage Feature Flags",
          link: {
            type: "doc",
            id: "tutorials/manage-feature-flags",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/manage-feature-flags",
            },
          ],
        },

        // Optimize Cloud Costs - cloud-cost-management
        {
          type: "category",
          label: "Manage Cloud Costs",
          link: {
            type: "doc",
            id: "tutorials/manage-cloud-costs",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/manage-cloud-costs",
            },
          ],
        },

        // Manage SLOs - service-reliability-management
        {
          type: "category",
          label: "Manage Service Reliability",
          link: {
            type: "doc",
            id: "tutorials/manage-service-reliability",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "tutorials/manage-service-reliability" }],
        },

        // Orchestrate Security Tests - security-testing-orchestration
        {
          type: "category",
          label: "Orchestrate Security Tests",
          link: {
            type: "doc", // "generated-index",
            id: "tutorials/orchestrate-security-tests",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/orchestrate-security-tests",
            },
          ],
        },

        // Run Chaos Experiments - chaos-engineering
        {
          type: "category",
          label: "Run Chaos Experiments",
          link: {
            type: "doc",
            id: "tutorials/run-chaos-experiments",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "tutorials/run-chaos-experiments",
            },
          ],
        },

        // Platform - common-platform
        {
          type: "category",
          label: "Administer Harness Platform",
          link: {
            type: "doc",
            id: "tutorials/platform",
          },
          collapsed: true,
          items: [
            { type: "autogenerated", dirName: "tutorials/platform" },
          ],
        },

        //Additional Items in this parent can go here. 

      ],
    },
    // Documentation Parent
    {
      type: "category",
      label: "Documentation",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "link",
          label: "Continuous Integration",
          href: "https://docs.harness.io/category/zgffarnh1m-ci-category",
        },
        {
          type: "link",
          label: "Continuous Delivery",
          href: "https://docs.harness.io/category/pfzgb4tg05-howto-cd",
        },
        {
          type: "link",
          label: "Feature Flags",
          href: "https://docs.harness.io/category/vjolt35atg-feature-flags",
        },
        {
          type: "link",
          label: "Cloud Cost Management",
          href: "https://docs.harness.io/category/exgoemqhji-ccm",
        },
        {
          type: "link",
          label: "Service Reliability Management",
          href: "https://docs.harness.io/category/ko19u4brsv-howtos-service-reliability-management",
        },
        {
          type: "link",
          label: "Security Testing Orchestration",
          href: "https://docs.harness.io/category/txlccquh5c-sto-category",
        },
        {
          type: "link",
          label: "Chaos Engineering",
          href: "https://docs.harness.io/category/kl0mxwpfw1-hce-category",
        },
      ],
    },

    //Additional Items in this parent can go here. 

  ],
};

module.exports = sidebars;
