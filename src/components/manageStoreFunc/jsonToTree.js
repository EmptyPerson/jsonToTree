export default function JsonToTree(obj, parent = "ROOT", level = 0, isActive = false, isArray = false, path = '') { // отдельная рекурсивная функция

    let result = {
        parent: parent,
        children: [],
        fields: [],
        level: level,
        isActive: isActive,
        isArray: isArray,
        path: path
    }

    result.path = path + ' ' + parent

    if (Array.isArray(obj)) result.isArray = true

    if (typeof (obj) != 'object') {

        result.fields.push(obj)

    } else {

        for (let k of Object.keys(obj)) {

            if (Object.keys(obj).length === 0) {
                result.fields.push(k)

            } else {

                result.children.push(JsonToTree(obj[k], k, level + 1, false, false, result.path))

            }
        }
    }

    return result;
}