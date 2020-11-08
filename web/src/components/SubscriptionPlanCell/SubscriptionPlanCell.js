export const QUERY = gql`
  query SubscriptionPlanQuery($id: String!) {
    plan(id: $id) {
      id
      name
      description
      interval
      price
      size
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ plan }) => {
  return JSON.stringify(plan)
}
