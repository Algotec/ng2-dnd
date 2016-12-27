import { Component, Input, Output, EventEmitter } from '@angular/core';
export function triggerEvent(elem, eventName, eventType) {
    var event = document.createEvent(eventType);
    event.initEvent(eventName, true, true);
    elem.dispatchEvent(event);
}
export var Container = (function () {
    function Container() {
        this.dragOne = new EventEmitter();
        this.dragTwo = new EventEmitter();
        this.dragOneTwo = new EventEmitter();
        this.dropOne = new EventEmitter();
        this.dropTwo = new EventEmitter();
        this.dropOneTwo = new EventEmitter();
    }
    // tslint:disable-next-line
    Container.prototype.dragOneSuccessCallback = function ($event) {
        this.dragOne.emit($event);
    };
    // tslint:disable-next-line
    Container.prototype.dragTwoSuccessCallback = function ($event) {
        this.dragOne.emit($event);
    };
    // tslint:disable-next-line
    Container.prototype.dragOneTwoSuccessCallback = function ($event) {
        this.dragOneTwo.emit($event);
    };
    // tslint:disable-next-line
    Container.prototype.dropOneSuccessCallback = function ($event) {
        this.dropOne.emit($event);
    };
    // tslint:disable-next-line
    Container.prototype.dropTwoSuccessCallback = function ($event) {
        this.dropTwo.emit($event);
    };
    // tslint:disable-next-line
    Container.prototype.dropOneTwoSuccessCallback = function ($event) {
        this.dropOneTwo.emit($event);
    };
    Container.decorators = [
        { type: Component, args: [{
                    selector: 'container',
                    template: "\n<div id='dragIdOne' dnd-draggable [dropZones]=\"['zone-one']\" (onDragSuccess)=\"dragOneSuccessCallback($event)\"></div>\n<div id='dragIdTwo' dnd-draggable [dropZones]=\"['zone-two']\" (onDragSuccess)=\"dragTwoSuccessCallback($event)\"></div>\n<div id='dragIdOneTwo' dnd-draggable [dropZones]=\"['zone-one', 'zone-two']\" (onDragSuccess)=\"dragOneTwoSuccessCallback($event)\"></div>\n\n<div id='dropIdOne' dnd-droppable [dropZones]=\"['zone-one']\" (onDropSuccess)=\"dropOneSuccessCallback($event)\"></div>\n<div id='dropIdTwo' dnd-droppable [dropZones]=\"['zone-two']\" (onDropSuccess)=\"dropTwoSuccessCallback($event)\"></div>\n<div id='dropIdOneTwo' dnd-droppable [dropZones]=\"['zone-one', 'zone-two']\" (onDropSuccess)=\"dropOneTwoSuccessCallback($event)\"></div>\n"
                },] },
    ];
    /** @nocollapse */
    Container.ctorParameters = function () { return []; };
    Container.propDecorators = {
        'dragOne': [{ type: Output },],
        'dragTwo': [{ type: Output },],
        'dragOneTwo': [{ type: Output },],
        'dropOne': [{ type: Output },],
        'dropTwo': [{ type: Output },],
        'dropOneTwo': [{ type: Output },],
    };
    return Container;
}());
export var Container2 = (function () {
    function Container2() {
        this.dragEnabled = true;
        this.dragData = "Hello World at " + new Date().toString();
        this.drag = new EventEmitter();
        this.drop = new EventEmitter();
    }
    // tslint:disable-next-line
    Container2.prototype.dragSuccessCallback = function ($event) {
        this.drag.emit($event);
    };
    // tslint:disable-next-line
    Container2.prototype.dropSuccessCallback = function ($event) {
        this.drop.emit($event);
    };
    Container2.decorators = [
        { type: Component, args: [{
                    selector: 'container2',
                    template: "\n<div id='dragId' dnd-draggable [dragEnabled]=\"dragEnabled\" [dragData]=\"dragData\" [dropZones]=\"['test1']\" (onDragSuccess)=\"dragSuccessCallback($event)\"></div>\n<div id='dropId' dnd-droppable [dropZones]=\"['test1']\" (onDropSuccess)=\"dropSuccessCallback($event)\"></div>\n"
                },] },
    ];
    /** @nocollapse */
    Container2.ctorParameters = function () { return []; };
    Container2.propDecorators = {
        'dragEnabled': [{ type: Input },],
        'dragData': [{ type: Input },],
        'drag': [{ type: Output },],
        'drop': [{ type: Output },],
    };
    return Container2;
}());
export var Container3 = (function () {
    function Container3() {
        this.sortableList = [];
    }
    Container3.decorators = [
        { type: Component, args: [{
                    selector: 'container3',
                    template: "\n<div>\n    <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"sortableList\">\n        <li *ngFor=\"let item of sortableList; let i = index\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n    </ul>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Container3.ctorParameters = function () { return []; };
    Container3.propDecorators = {
        'sortableList': [{ type: Input },],
    };
    return Container3;
}());
export var Container4 = (function () {
    function Container4() {
        this.singleList = [];
        this.multiOneList = [];
        this.multiTwoList = [];
    }
    Container4.decorators = [
        { type: Component, args: [{
                    selector: 'container4',
                    template: "\n<div>\n    <div id='single'>\n        <ul class=\"list-group\" dnd-sortable-container [sortableData]=\"singleList\">\n            <li *ngFor=\"let item of singleList; let i = index\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n        </ul>\n    </div>\n    <div id='multiOne' dnd-sortable-container [dropZones]=\"['multiList']\" [sortableData]=\"multiOneList\">\n        <ul class=\"list-group\" >\n            <li *ngFor=\"let item of multiOneList; let i = index\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n        </ul>\n    </div>\n    <div id='multiTwo' dnd-sortable-container [dropZones]=\"['multiList']\" [sortableData]=\"multiTwoList\">\n        <ul class=\"list-group\" >\n            <li *ngFor=\"let item of multiTwoList; let i = index\" dnd-sortable [sortableIndex]=\"i\">{{item}}</li>\n        </ul>\n    </div>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Container4.ctorParameters = function () { return []; };
    Container4.propDecorators = {
        'singleList': [{ type: Input },],
        'multiOneList': [{ type: Input },],
        'multiTwoList': [{ type: Input },],
    };
    return Container4;
}());
