import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    const mappedObj = fromJS(object);

    return mappedObj.get(array, undefined);
}