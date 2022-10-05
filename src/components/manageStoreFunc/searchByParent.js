export default function searchByParent(obj, activeParent) {

    if (obj.parent !== activeParent) {
        obj.isActive = false
    }

    if (obj.parent === activeParent) {

        return obj
    }

    for (let child of obj.children) {

        if (child.parent === activeParent) {
            return child
        }
        let deepChild = searchByParent(child, activeParent)

        if (deepChild) {
            return deepChild
        }
    }

    return null
}