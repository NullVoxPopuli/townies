import * as React from "react";

import { HealthChecker } from "./HealthChecker";
import { StatusPresentation } from "./StatusPresentation";

export class APIHealth extends React.Component {
  public render() {
    return (
      <HealthChecker
        name="API Server"
        url="/health_check"
        component={StatusPresentation}
        />
    );
  }
}