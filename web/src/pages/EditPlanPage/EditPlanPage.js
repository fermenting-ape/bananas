import PlansLayout from 'src/layouts/PlansLayout'
import EditPlanCell from 'src/components/EditPlanCell'

const EditPlanPage = ({ id }) => {
  return (
    <PlansLayout>
      <EditPlanCell id={id} />
    </PlansLayout>
  )
}

export default EditPlanPage
