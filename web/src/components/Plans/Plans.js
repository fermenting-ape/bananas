import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/PlansCell'

const DELETE_PLAN_MUTATION = gql`
  mutation DeletePlanMutation($id: String!) {
    deletePlan(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const PlansList = ({ plans }) => {
  const { addMessage } = useFlash()
  const [deletePlan] = useMutation(DELETE_PLAN_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Interval</th>
            <th>Size</th>
            <th>Price</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{truncate(plan.id)}</td>
              <td>{truncate(plan.name)}</td>
              <td>{truncate(plan.interval)}</td>
              <td>{truncate(plan.size)}</td>
              <td>{truncate(plan.price)}</td>
              <td>{truncate(plan.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.plan({ id: plan.id })}
                    title={'Show plan ' + plan.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlan({ id: plan.id })}
                    title={'Edit plan ' + plan.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete plan ' + plan.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(plan.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlansList
