'use strict';

/**
 *
 */
class DOMGuiSystem extends cxVoidSystem
{
    constructor( container )
    {
        super();
        this.tag = 'cx.gui.dom.system';
        this.container = container;
        this.scripts = [];
    }

    /**
     * [addButton description]
     * @param {[type]} text      [description]
     * @param {[type]} guiScript [description]
     */
    addElement(element, guiScript)
    {
        guiScript.world = this.world;

        if(guiScript instanceof GuiClickScript){
            element.addEventListener('click', this._guiButtonClickedClosure(this, guiScript) );
        }

        guiScript.dom = element;
        this.scripts.push(guiScript);

        this.container.appendChild(element);
    }

    /**
     * [_guiButtonClickedClosure description]
     * @param  {DOMGuiSystem} self   [description]
     * @param  {GuiClickScript} script [description]
     * @return {function}        [description]
     */
    _guiButtonClickedClosure(self, script){
        return function(event){
            script.onClick(event);
        }
    }

    /**
     * [update description]
     */
    update (){
        let scripts = this.scripts, len = scripts.length;
        for(let i = 0; i < len; i++){
            let script = scripts[i];

            if(script.isSetUp === false){
                script.setup();
                script.isSetUp = true;
            }

            if(script.active === true){
                script.update();
            }
        }
    }

}
