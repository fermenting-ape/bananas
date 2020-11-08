import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PlanForm from 'src/components/PlanForm'

import { QUERY } from 'src/components/PlansCell'

const CREATE_PLAN_MUTATION = gql`
  mutation CreatePlanMutation($input: CreatePlanInput!) {
    createPlan(input: $input) {
      id
    }
  }
`

const NewPlan = () => {
  const { addMessage } = useFlash()
  const [createPlan, { loading, error }] = useMutation(CREATE_PLAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.plans())
      addMessage('Plan created.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onSave = (input) => {
    createPlan({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Plan</h2>
      </header>
      <div className="rw-segment-main">
        <PlanForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlan
