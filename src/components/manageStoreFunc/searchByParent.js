export default function searchByParent(obj, path) {


    if (obj.path === path) {

        return obj
    }

    for (let child of obj.children) {

        if (obj.path === path) {
            return child
        }
        let deepChild = searchByParent(child, path)

        if (deepChild) {
            return deepChild
        }
    }

    return null
}