/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    docs: [
        {
            type: "category",
            label: "Manta Network",
            collapsible: false,
            items: [
                {
                    type: "category",
                    label: "What is Manta?",
                    items: [
                        {
                            type: "doc",
                            label: "What is Manta?",
                            id: "Introduction",
                        },
                        {
                            type: "doc",
                            label: "What is Manta Pacific (Layer 2)",
                            id: "introduction/Manta-Pacific",
                        },
                        {
                            type: "doc",
                            label: "What is Manta Atlantic (Layer1)",
                            id: "introduction/Manta-Atlantic",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Research",
                    items: [
                        {
                            type: "doc",
                            label: "Zero-Knowledge Proofs",
                            id: "concepts/ZKP",
                        },
                        {
                            type: "doc",
                            label: "Celestia",
                            id: "concepts/Celestia",
                        },
                        {
                            type: "doc",
                            label: "ZKEVM",
                            id: "concepts/ZKEVM",
                        },
                        {
                            type: "doc",
                            label: "Universal Circuits (Alpha): zkShuffle",
                            id: "zkShuffle/Overview",
                        },
                        {
                            type: "doc",
                            label: "OP Stack",
                            id: "concepts/OPStack",
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Manta Pacific Network",
            collapsible: false,
            items: [
                {
                    type: "category",
                    label: "Network Info",
                    items: [
                        {
                            type: "doc",
                            label: "Quickstart",
                            id: "manta-pacific/Quickstart",
                        },
                        {
                            type: "doc",
                            label: "EVM Compatibility",
                            id: "manta-pacific/EVM Compatible",
                        },
                        {
                            type: "doc",
                            label: "Block Explorer",
                            id: "manta-pacific/Block Explorer",
                        },
                        {
                            type: "doc",
                            label: "JSON-RPC Nodes",
                            id: "manta-pacific/JSON-RPC Nodes",
                        },
                        {
                            type: "doc",
                            label: "Testnet Info",
                            id: "manta-pacific/Testnet Info",
                        },
                    ],
                },
                {
                    type: "doc",
                    label: "Manta Token",
                    id: "mantaToken/mantaToken",
                },
                {
                    type: "category",
                    label: "Universal Circuits (Alpha): zkShuffle",

                    items: [
                        {
                            type: "doc",
                            label: "Overview",
                            id: "zkShuffle/Overview",
                        },
                        {
                            type: "autogenerated",
                            dirName: "zkShuffle/Circuits",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "NPO-zkSBT",
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "zkSBT/auto",
                        },
                        {
                            type: "doc",
                            label: "Design",
                            id: "zkSBT/zkSBT Asset",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Deploy Your App",
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "zkShuffle/Deploy",
                        },
                    ],
                },
                {
                    type: "doc",
                    label: "Manta Pacific Roadmap",
                    id: "concepts/Roadmap",
                },
                {
                    type: "category",
                    label: "Bridge to Manta Pacific ",
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "bridge-to-pacific",
                        },
                    ],
                },
                {
                    type: "doc",
                    label: "Manta Pacific Ecosystem",
                    id: "concepts/Manta Pacific Ecosystem",
                },
                {
                    type: "doc",
                    label: "Manta Pacific Replica Node",
                    id: "manta-pacific/Replica Node",
                },
                {
                    type: "doc",
                    label: "RedStone Oracles",
                    id: "manta-pacific/RedStone Oracles",
                },
            ],
        },
        {
            type: "category",
            label: "Manta Atlantic Network",
            collapsible: false,
            items: [
                {
                    type: "category",
                    label: "Collator",
                    items: [
                        {
                            type: "autogenerated",
                            dirName: "manta-atlantic/Collation",
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Node",
                    items: [
                        "manta-atlantic/Node/Overview",
                        "manta-atlantic/Node/Requirements",
                        {
                            type: "category",
                            label: "SetupAndRun",
                            items: [
                                "manta-atlantic/Node/SetupAndRun/full_node",
                                "manta-atlantic/Node/SetupAndRun/archive_node",
                            ],
                        },
                    ],
                },
                {
                    type: "doc",
                    label: "Bridge",
                    id: "manta-atlantic/Bridge",
                },
                {
                  type: "doc",
                  label: "Stake",
                  id: "manta-atlantic/Stake",
              },
            ],
        },
        {
            type: "category",
            label: "OpenZL",
            collapsible: false,
            items: [
                {
                    type: "doc",
                    label: "Introduction",
                    id: "openzl/introduction",
                },
                {
                    type: "category",
                    label: "ECLAIR Basics",
                    items: [
                        {
                            type: "doc",
                            label: "Native vs Non-Native Computation",
                            id: "openzl/native_nonnative",
                        },
                        {
                            type: "category",
                            label: "ECLAIR Standard Library",
                            items: [
                                {
                                    type: "doc",
                                    label: "Introduction",
                                    id: "openzl/std/eclair_std_lib",
                                },
                                {
                                    type: "doc",
                                    label: "Bool",
                                    id: "openzl/std/bool",
                                },
                                {
                                    type: "doc",
                                    label: "Cmp",
                                    id: "openzl/std/cmp",
                                },
                                {
                                    type: "doc",
                                    label: "Num",
                                    id: "openzl/std/num",
                                },
                                {
                                    type: "doc",
                                    label: "Ops",
                                    id: "openzl/std/ops",
                                },
                            ],
                        },
                        {
                            type: "doc",
                            label: "Allocation",
                            id: "openzl/alloc",
                        },
                    ],
                },
                {
                    type: "doc",
                    label: "Tutorial: Poseidon Permutation",
                    id: "openzl/poseidon_permutation_tutorial",
                },
                {
                    type: "category",
                    label: "Proof System Plugins",
                    items: [
                        {
                            type: "doc",
                            label: "Introduction",
                            id: "openzl/proof_systems",
                        },
                    ],
                },
            ],
        },
    ],
};
