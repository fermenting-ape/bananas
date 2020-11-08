import Plan from 'src/components/Plan'

export const QUERY = gql`
  query FIND_PLAN_BY_ID($id: String!) {
    plan: plan(id: $id) {
      id
      name
      interval
      size
      price
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Plan not found</div>

export const Success = ({ plan }) => {
  return <Plan plan={plan} />
}
