/**
 * Created by zyg on 15/12/23.
 */
module.exports = {
    setStyle: function (node, style) {
        for (var k in style) {
            node.style[k] = style[k];
        }
        return node;
    }
}