import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/PlansCell'

const DELETE_PLAN_MUTATION = gql`
  mutation DeletePlanMutation($id: String!) {
    deletePlan(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Plan = ({ plan }) => {
  const { addMessage } = useFlash()
  const [deletePlan] = useMutation(DELETE_PLAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.plans())
      addMessage('Plan deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete plan ' + id + '?')) {
      deletePlan({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Plan {plan.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{plan.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{plan.name}</td>
            </tr>
            <tr>
              <th>Interval</th>
              <td>{plan.interval}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{plan.size}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{plan.price}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{plan.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlan({ id: plan.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(plan.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Plan
