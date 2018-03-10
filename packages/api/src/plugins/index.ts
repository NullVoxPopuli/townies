"use strict";

import Documentation from "./documentation";
import { ApolloServer } from "./graphql";
import HealthCheck from "./healthCheck";
import Log from "./log";

export default ([] as any).concat(HealthCheck)
                 .concat(Log)
                 .concat(Documentation)
                 .concat(ApolloServer);
