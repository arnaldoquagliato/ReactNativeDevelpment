import Realm, { schemaVersion } from 'realm'
import Programas from './Programas'
export default function getRealm(){
  return Realm.open({
    schema: [Programas],
    deleteRealmIfMigrationNeeded: true,
  })
  schemaVersion:1
}