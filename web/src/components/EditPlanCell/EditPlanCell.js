import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PlanForm from 'src/components/PlanForm'

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
const UPDATE_PLAN_MUTATION = gql`
  mutation UpdatePlanMutation($id: String!, $input: UpdatePlanInput!) {
    updatePlan(id: $id, input: $input) {
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

export const Success = ({ plan }) => {
  const { addMessage } = useFlash()
  const [updatePlan, { loading, error }] = useMutation(UPDATE_PLAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.plans())
      addMessage('Plan updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updatePlan({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Plan {plan.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PlanForm plan={plan} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
