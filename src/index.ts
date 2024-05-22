/// <reference types="@types/google.maps" />
import { OwnMap } from "./OwnMap";

import { User } from "./User";

const user = new User();

// const company = new Company();

const ownMap = new OwnMap("map");
ownMap.addUserMark(user);
