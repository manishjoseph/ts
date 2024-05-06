import { Company } from "./Company";
import { User } from "./User";

import { CustomMaps } from "./CustomMaps";

const user = new User();
// console.log(user);

const company = new Company();
// console.log(company);

const customMap = new CustomMaps("map");
//Typescript classes need not explicitly implement interfaces, as long as they satisfy
customMap.addMarker(user);
customMap.addMarker(company);
