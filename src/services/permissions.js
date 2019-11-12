// import Permissions from 'react-native-permissions'
// import {openSettings} from 'react-native-permissions';

import { check, request, openSettings, PERMISSIONS, RESULTS } from 'react-native-permissions';

const permissionsEnum = {
  ok: 'authorized',
  no: 'denied',
  notAsked: 'undetermined'
}

const permissionsType = (permission) => {
  let type = {};

  switch (permission) {
    case 'location':
      type = { type: "whenInUse" }
      break

    default:
      type = { type: "always" }
      break
  }
  return type;
}

const permissionParser = (status) => {
  if(status == permissionsEnum.ok)
    return true
  else
    return false
}

export const permissionCheck = async (permission) => {
  let permissionStatus = await check(permission)
  return permissionParser(permissionStatus)
}

export const permissionFor = async (permission) => {
  console.log("I'm HERE: ")
  const currentStatus = await check(permission)
  // const type = permissionsType(permission)
  let granted
  console.log("CURRENT STATUS: ", currentStatus)

  switch (currentStatus) {
    case RESULTS.DENIED:
      const result = await request(permission);
      granted = result === RESULTS.GRANTED
      break

    case RESULTS.GRANTED:
      granted = true
      break

    // case permissionsEnum.no:
    //   // if (Permissions.canOpenSettings()) {
    //   //   granted = await openSettings()
    //   // } else {
    //     const result = await request(permission)
    //     granted = result === RESULTS.GRANTED
    //   }
    //   break
    default:
      granted = false
      break
  }

  return granted
}
