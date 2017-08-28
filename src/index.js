function getComponent() {
    // return import('lodash').then(_=>{
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(err => 'An error occurred while loading the component')
}

getComponent().then(component => {
    document.body.appendChild(component);
})