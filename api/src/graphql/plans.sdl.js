export const schema = gql`
  type Plan {
    id: String!
    name: String!
    interval: String!
    size: Int!
    price: String!
    description: String!
  }

  type Query {
    plans: [Plan!]!
    plan(id: String!): Plan
  }

  input CreatePlanInput {
    name: String!
    interval: String!
    size: Int!
    price: String!
    description: String!
  }

  input UpdatePlanInput {
    name: String
    interval: String
    size: Int
    price: String
    description: String
  }

  type Mutation {
    createPlan(input: CreatePlanInput!): Plan!
    updatePlan(id: String!, input: UpdatePlanInput!): Plan!
    deletePlan(id: String!): Plan!
  }
`
