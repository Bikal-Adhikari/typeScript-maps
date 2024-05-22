/// <reference types="@types/google.maps" />
import { OwnMap } from "./OwnMap";

import { User } from "./User";
import { Company } from "./Company";

const user = new User();

const company = new Company();

const ownMap = new OwnMap("map");
ownMap.addMark(user);
ownMap.addMark(company);
