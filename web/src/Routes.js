// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/subscription-plan/{id}"
        page={SubscriptionPlanPage}
        name="subscriptionPlan"
      />
      <Route path="/plans/new" page={NewPlanPage} name="newPlan" />
      <Route path="/plans/{id}/edit" page={EditPlanPage} name="editPlan" />
      <Route path="/plans/{id}" page={PlanPage} name="plan" />
      <Route path="/plans" page={PlansPage} name="plans" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
