export default function JsonToTree(obj, parent = "ROOT", level = 0, isActive = false, isArray = false) { // отдельная рекурсивная функция

    let result = {
        parent: parent,
        children: [],
        fields: [],
        level: level,
        isActive: isActive,
        isArray: isArray
    }
    if (Array.isArray(obj)) result.isArray = true

    if (typeof (obj) != 'object') {
        result.fields.push(obj)

    } else {
        for (let k of Object.keys(obj)) {

            if (Object.keys(obj).length === 0) {
                result.fields.push(k)
            } else {

                result.children.push(JsonToTree(obj[k], k, level + 1))
            }
        }
    }

    return result;
}