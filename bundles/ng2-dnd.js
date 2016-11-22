System.register("src/draggable.component", ["node_modules/@angular/core/bundles/core.umd", "src/abstract.component", "src/dnd.config", "src/dnd.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, core_2, abstract_component_1, dnd_config_1, dnd_service_1;
    var __extends, DraggableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (abstract_component_1_1) {
                abstract_component_1 = abstract_component_1_1;
            },
            function (dnd_config_1_1) {
                dnd_config_1 = dnd_config_1_1;
            },
            function (dnd_service_1_1) {
                dnd_service_1 = dnd_service_1_1;
            }],
        execute: function() {
            // Copyright (C) 2016 Sergey Akopkokhyants
            // This project is licensed under the terms of the MIT license.
            // https://github.com/akserg/ng2-dnd
            __extends = (this && this.__extends) || function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            exports_1("DraggableComponent", DraggableComponent = (function (_super) {
                __extends(DraggableComponent, _super);
                function DraggableComponent(elemRef, dragDropService, config, cdr) {
                    _super.call(this, elemRef, dragDropService, config, cdr);
                    /**
                     * Callback function called when the drag actions happened.
                     */
                    this.onDragStart = new core_2.EventEmitter();
                    this.onDragEnd = new core_2.EventEmitter();
                    /**
                     * Callback function called when the drag action ends with a valid drop action.
                     * It is activated after the on-drop-success callback
                     */
                    this.onDragSuccessCallback = new core_2.EventEmitter();
                    this._defaultCursor = this._elem.style.cursor;
                    this.dragEnabled = true;
                }
                Object.defineProperty(DraggableComponent.prototype, "draggable", {
                    set: function (value) {
                        this.dragEnabled = !!value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DraggableComponent.prototype, "dropzones", {
                    set: function (value) {
                        this.dropZones = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
                    /**
                     * Drag allowed effect
                     */
                    set: function (value) {
                        this.effectAllowed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
                    /**
                     * Drag effect cursor
                     */
                    set: function (value) {
                        this.effectCursor = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                DraggableComponent.prototype._onDragStartCallback = function (event) {
                    this._dragDropService.isDragged = true;
                    this._dragDropService.dragData = this.dragData;
                    this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
                    this._elem.classList.add(this._config.onDragStartClass);
                    //
                    this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
                };
                DraggableComponent.prototype._onDragEndCallback = function (event) {
                    this._dragDropService.isDragged = false;
                    this._dragDropService.dragData = null;
                    this._dragDropService.onDragSuccessCallback = null;
                    this._elem.classList.remove(this._config.onDragStartClass);
                    //
                    this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
                };
                DraggableComponent.decorators = [
                    { type: core_2.Directive, args: [{ selector: '[dnd-draggable]' },] },
                ];
                /** @nocollapse */
                DraggableComponent.ctorParameters = [
                    { type: core_2.ElementRef, },
                    { type: dnd_service_1.DragDropService, },
                    { type: dnd_config_1.DragDropConfig, },
                    { type: core_1.ChangeDetectorRef, },
                ];
                DraggableComponent.propDecorators = {
                    'draggable': [{ type: core_2.Input, args: ["dragEnabled",] },],
                    'onDragStart': [{ type: core_2.Output },],
                    'onDragEnd': [{ type: core_2.Output },],
                    'dragData': [{ type: core_2.Input },],
                    'onDragSuccessCallback': [{ type: core_2.Output, args: ["onDragSuccess",] },],
                    'dropzones': [{ type: core_2.Input, args: ["dropZones",] },],
                    'effectallowed': [{ type: core_2.Input, args: ["effectAllowed",] },],
                    'effectcursor': [{ type: core_2.Input, args: ["effectCursor",] },],
                    'dragImage': [{ type: core_2.Input },],
                    'cloneItem': [{ type: core_2.Input },],
                };
                return DraggableComponent;
            }(abstract_component_1.AbstractComponent)));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYWdnYWJsZS5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUdJLFNBQVMsRUFVRixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYjdCLDBDQUEwQztZQUMxQywrREFBK0Q7WUFDL0Qsb0NBQW9DO1lBQ2hDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLENBQUMsQ0FBQztZQU1TLGdDQUFBLGtCQUFrQixHQUFHLENBQUMsVUFBVSxNQUFNO2dCQUM3QyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLDRCQUE0QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDekQ7O3VCQUVHO29CQUNILElBQUksQ0FB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
System.register("src/droppable.component", ["node_modules/@angular/core/bundles/core.umd", "src/abstract.component", "src/dnd.config", "src/dnd.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, core_2, abstract_component_1, dnd_config_1, dnd_service_1;
    var __extends, DroppableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (abstract_component_1_1) {
                abstract_component_1 = abstract_component_1_1;
            },
            function (dnd_config_1_1) {
                dnd_config_1 = dnd_config_1_1;
            },
            function (dnd_service_1_1) {
                dnd_service_1 = dnd_service_1_1;
            }],
        execute: function() {
            // Copyright (C) 2016 Sergey Akopkokhyants
            // This project is licensed under the terms of the MIT license.
            // https://github.com/akserg/ng2-dnd
            __extends = (this && this.__extends) || function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            exports_1("DroppableComponent", DroppableComponent = (function (_super) {
                __extends(DroppableComponent, _super);
                function DroppableComponent(elemRef, dragDropService, config, cdr) {
                    _super.call(this, elemRef, dragDropService, config, cdr);
                    /**
                     * Callback function called when the drop action completes correctly.
                     * It is activated before the on-drag-success callback.
                     */
                    this.onDropSuccess = new core_2.EventEmitter();
                    this.onDragEnter = new core_2.EventEmitter();
                    this.onDragOver = new core_2.EventEmitter();
                    this.onDragLeave = new core_2.EventEmitter();
                    this.dropEnabled = true;
                }
                Object.defineProperty(DroppableComponent.prototype, "droppable", {
                    set: function (value) {
                        this.dropEnabled = !!value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
                    set: function (value) {
                        this.allowDrop = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DroppableComponent.prototype, "dropzones", {
                    set: function (value) {
                        this.dropZones = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
                    /**
                     * Drag allowed effect
                     */
                    set: function (value) {
                        this.effectAllowed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
                    /**
                     * Drag effect cursor
                     */
                    set: function (value) {
                        this.effectCursor = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                DroppableComponent.prototype._onDragEnterCallback = function (event) {
                    if (this._dragDropService.isDragged) {
                        this._elem.classList.add(this._config.onDragEnterClass);
                        this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                    }
                };
                DroppableComponent.prototype._onDragOverCallback = function (event) {
                    if (this._dragDropService.isDragged) {
                        this._elem.classList.add(this._config.onDragOverClass);
                        this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                    }
                };
                ;
                DroppableComponent.prototype._onDragLeaveCallback = function (event) {
                    if (this._dragDropService.isDragged) {
                        this._elem.classList.remove(this._config.onDragOverClass);
                        this._elem.classList.remove(this._config.onDragEnterClass);
                        this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                    }
                };
                ;
                DroppableComponent.prototype._onDropCallback = function (event) {
                    if (this._dragDropService.isDragged) {
                        this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                        if (this._dragDropService.onDragSuccessCallback) {
                            this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                        }
                        this._elem.classList.remove(this._config.onDragOverClass);
                        this._elem.classList.remove(this._config.onDragEnterClass);
                    }
                };
                DroppableComponent.decorators = [
                    { type: core_2.Directive, args: [{ selector: '[dnd-droppable]' },] },
                ];
                /** @nocollapse */
                DroppableComponent.ctorParameters = [
                    { type: core_2.ElementRef, },
                    { type: dnd_service_1.DragDropService, },
                    { type: dnd_config_1.DragDropConfig, },
                    { type: core_1.ChangeDetectorRef, },
                ];
                DroppableComponent.propDecorators = {
                    'droppable': [{ type: core_2.Input, args: ["dropEnabled",] },],
                    'onDropSuccess': [{ type: core_2.Output },],
                    'onDragEnter': [{ type: core_2.Output },],
                    'onDragOver': [{ type: core_2.Output },],
                    'onDragLeave': [{ type: core_2.Output },],
                    'allowdrop': [{ type: core_2.Input, args: ["allowDrop",] },],
                    'dropzones': [{ type: core_2.Input, args: ["dropZones",] },],
                    'effectallowed': [{ type: core_2.Input, args: ["effectAllowed",] },],
                    'effectcursor': [{ type: core_2.Input, args: ["effectCursor",] },],
                };
                return DroppableComponent;
            }(abstract_component_1.AbstractComponent)));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyb3BwYWJsZS5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUdJLFNBQVMsRUFVRixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYjdCLDBDQUEwQztZQUMxQywrREFBK0Q7WUFDL0Qsb0NBQW9DO1lBQ2hDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLENBQUMsQ0FBQztZQU1TLGdDQUFBLGtCQUFrQixHQUFHLENBQUMsVUFBVSxNQUFNO2dCQUM3QyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLDRCQUE0QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHO29CQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDekQ7Ozt1QkFHRztvQkFDSCxJQUFJLENB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
System.register("src/sortable.component", ["node_modules/@angular/core/bundles/core.umd", "src/abstract.component", "src/dnd.config", "src/dnd.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, core_2, abstract_component_1, dnd_config_1, dnd_service_1;
    var __extends, SortableContainer, SortableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (abstract_component_1_1) {
                abstract_component_1 = abstract_component_1_1;
            },
            function (dnd_config_1_1) {
                dnd_config_1 = dnd_config_1_1;
            },
            function (dnd_service_1_1) {
                dnd_service_1 = dnd_service_1_1;
            }],
        execute: function() {
            // Copyright (C) 2016 Sergey Akopkokhyants
            // This project is licensed under the terms of the MIT license.
            // https://github.com/akserg/ng2-dnd
            __extends = (this && this.__extends) || function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            exports_1("SortableContainer", SortableContainer = (function (_super) {
                __extends(SortableContainer, _super);
                function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
                    _super.call(this, elemRef, dragDropService, config, cdr);
                    this._sortableDataService = _sortableDataService;
                    this._sortableData = [];
                    this.dragEnabled = false;
                }
                Object.defineProperty(SortableContainer.prototype, "draggable", {
                    set: function (value) {
                        this.dragEnabled = !!value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SortableContainer.prototype, "sortableData", {
                    get: function () {
                        return this._sortableData;
                    },
                    set: function (sortableData) {
                        this._sortableData = sortableData;
                        //
                        this.dropEnabled = this._sortableData.length === 0;
                        // console.log("collection is changed, drop enabled: " + this.dropEnabled);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SortableContainer.prototype, "dropzones", {
                    set: function (value) {
                        this.dropZones = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                SortableContainer.prototype._onDragEnterCallback = function (event) {
                    if (this._sortableDataService.isDragged) {
                        var item = this._sortableDataService.sortableData[this._sortableDataService.index];
                        // Check does element exist in sortableData of this Container
                        if (this._sortableData.indexOf(item) === -1) {
                            // Let's add it
                            // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                            // Remove item from previouse list
                            this._sortableDataService.sortableData.splice(this._sortableDataService.index, 1);
                            // Add item to new list
                            this._sortableData.unshift(item);
                            this._sortableDataService.sortableData = this._sortableData;
                            this._sortableDataService.index = 0;
                        }
                        // Refresh changes in properties of container component
                        this.detectChanges();
                    }
                };
                SortableContainer.decorators = [
                    { type: core_2.Directive, args: [{ selector: '[dnd-sortable-container]' },] },
                ];
                /** @nocollapse */
                SortableContainer.ctorParameters = [
                    { type: core_2.ElementRef, },
                    { type: dnd_service_1.DragDropService, },
                    { type: dnd_config_1.DragDropConfig, },
                    { type: core_1.ChangeDetectorRef, },
                    { type: dnd_service_1.DragDropSortableService, },
                ];
                SortableContainer.propDecorators = {
                    'draggable': [{ type: core_2.Input, args: ["dragEnabled",] },],
                    'sortableData': [{ type: core_2.Input },],
                    'dropzones': [{ type: core_2.Input, args: ["dropZones",] },],
                };
                return SortableContainer;
            }(abstract_component_1.AbstractComponent)));
            exports_1("SortableComponent", SortableComponent = (function (_super) {
                __extends(SortableComponent, _super);
                function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
                    _super.call(this, elemRef, dragDropService, config, cdr);
                    this._sortableContainer = _sortableContainer;
                    this._sortableDataService = _sortableDataService;
                    /**
                     * Callback function called when the drag action ends with a valid drop action.
                     * It is activated after the on-drop-success callback
                     */
                    this.onDragSuccessCallback = new core_2.EventEmitter();
                    this.onDragStartCallback = new core_2.EventEmitter();
                    this.onDragOverCallback = new core_2.EventEmitter();
                    this.onDragEndCallback = new core_2.EventEmitter();
                    this.onDropSuccessCallback = new core_2.EventEmitter();
                    this.dropZones = this._sortableContainer.dropZones;
                    this.dragEnabled = true;
                    this.dropEnabled = true;
                }
                Object.defineProperty(SortableComponent.prototype, "draggable", {
                    set: function (value) {
                        this.dragEnabled = !!value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SortableComponent.prototype, "droppable", {
                    set: function (value) {
                        this.dropEnabled = !!value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SortableComponent.prototype, "effectallowed", {
                    /**
                     * Drag allowed effect
                     */
                    set: function (value) {
                        this.effectAllowed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SortableComponent.prototype, "effectcursor", {
                    /**
                     * Drag effect cursor
                     */
                    set: function (value) {
                        this.effectCursor = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                SortableComponent.prototype._onDragStartCallback = function (event) {
                    // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
                    this._sortableDataService.isDragged = true;
                    this._sortableDataService.sortableData = this._sortableContainer.sortableData;
                    this._sortableDataService.index = this.index;
                    this._sortableDataService.markSortable(this._elem);
                    // Add dragData
                    this._dragDropService.isDragged = true;
                    this._dragDropService.dragData = this.dragData;
                    this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
                    //
                    this.onDragStartCallback.emit(this._dragDropService.dragData);
                };
                SortableComponent.prototype._onDragOverCallback = function (event) {
                    if (this._sortableDataService.isDragged && this._elem != this._sortableDataService.elem) {
                        // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
                        this._sortableDataService.sortableData = this._sortableContainer.sortableData;
                        this._sortableDataService.index = this.index;
                        this._sortableDataService.markSortable(this._elem);
                        this.onDragOverCallback.emit(this._dragDropService.dragData);
                    }
                };
                SortableComponent.prototype._onDragEndCallback = function (event) {
                    // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
                    this._sortableDataService.isDragged = false;
                    this._sortableDataService.sortableData = null;
                    this._sortableDataService.index = null;
                    this._sortableDataService.markSortable(null);
                    // Add dragGata
                    this._dragDropService.isDragged = false;
                    this._dragDropService.dragData = null;
                    this._dragDropService.onDragSuccessCallback = null;
                    //
                    this.onDragEndCallback.emit(this._dragDropService.dragData);
                };
                SortableComponent.prototype._onDragEnterCallback = function (event) {
                    if (this._sortableDataService.isDragged) {
                        this._sortableDataService.markSortable(this._elem);
                        if ((this.index !== this._sortableDataService.index) ||
                            (this._sortableDataService.sortableData != this._sortableContainer.sortableData)) {
                            // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                            // Get item
                            var item = this._sortableDataService.sortableData[this._sortableDataService.index];
                            // Remove item from previouse list
                            this._sortableDataService.sortableData.splice(this._sortableDataService.index, 1);
                            // Add item to new list
                            this._sortableContainer.sortableData.splice(this.index, 0, item);
                            this._sortableDataService.sortableData = this._sortableContainer.sortableData;
                            this._sortableDataService.index = this.index;
                        }
                    }
                };
                SortableComponent.prototype._onDropCallback = function (event) {
                    if (this._sortableDataService.isDragged) {
                        // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
                        this.onDropSuccessCallback.emit(this._dragDropService.dragData);
                        if (this._dragDropService.onDragSuccessCallback) {
                            // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                            this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
                        }
                        // Refresh changes in properties of container component
                        this._sortableContainer.detectChanges();
                    }
                };
                SortableComponent.decorators = [
                    { type: core_2.Directive, args: [{ selector: '[dnd-sortable]' },] },
                ];
                /** @nocollapse */
                SortableComponent.ctorParameters = [
                    { type: core_2.ElementRef, },
                    { type: dnd_service_1.DragDropService, },
                    { type: dnd_config_1.DragDropConfig, },
                    { type: SortableContainer, },
                    { type: dnd_service_1.DragDropSortableService, },
                    { type: core_1.ChangeDetectorRef, },
                ];
                SortableComponent.propDecorators = {
                    'index': [{ type: core_2.Input, args: ['sortableIndex',] },],
                    'draggable': [{ type: core_2.Input, args: ["dragEnabled",] },],
                    'droppable': [{ type: core_2.Input, args: ["dropEnabled",] },],
                    'dragData': [{ type: core_2.Input },],
                    'effectallowed': [{ type: core_2.Input, args: ["effectAllowed",] },],
                    'effectcursor': [{ type: core_2.Input, args: ["effectCursor",] },],
                    'onDragSuccessCallback': [{ type: core_2.Output, args: ["onDragSuccess",] },],
                    'onDragStartCallback': [{ type: core_2.Output, args: ["onDragStart",] },],
                    'onDragOverCallback': [{ type: core_2.Output, args: ["onDragOver",] },],
                    'onDragEndCallback': [{ type: core_2.Output, args: ["onDragEnd",] },],
                    'onDropSuccessCallback': [{ type: core_2.Output, args: ["onDropSuccess",] },],
                };
                return SortableComponent;
            }(abstract_component_1.AbstractComponent)));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29ydGFibGUuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFHSSxTQUFTLEVBVUYsaUJBQWlCLEVBdUVqQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcEY1QiwwQ0FBMEM7WUFDMUMsK0RBQStEO1lBQy9ELG9DQUFvQztZQUNoQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6RixDQUFDLENBQUM7WUFNUywrQkFBQSxpQkFBaUIsR0FBRyxDQUFDLFVBQVUsTUFBTTtnQkFDNUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQywyQkFBMkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLG9CQUFvQjtvQkFDbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JB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
System.register("src/dnd.config", ["node_modules/@angular/core/bundles/core.umd", "src/dnd.utils"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, dnd_utils_1;
    var DataTransferEffect, DragImage, DragDropConfig;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dnd_utils_1_1) {
                dnd_utils_1 = dnd_utils_1_1;
            }],
        execute: function() {
            exports_1("DataTransferEffect", DataTransferEffect = (function () {
                function DataTransferEffect(name) {
                    this.name = name;
                }
                DataTransferEffect.COPY = new DataTransferEffect('copy');
                DataTransferEffect.LINK = new DataTransferEffect('link');
                DataTransferEffect.MOVE = new DataTransferEffect('move');
                DataTransferEffect.NONE = new DataTransferEffect('none');
                DataTransferEffect.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                DataTransferEffect.ctorParameters = [
                    null,
                ];
                return DataTransferEffect;
            }()));
            exports_1("DragImage", DragImage = (function () {
                function DragImage(imageElement, x_offset, y_offset) {
                    if (x_offset === void 0) {
                        x_offset = 0;
                    }
                    if (y_offset === void 0) {
                        y_offset = 0;
                    }
                    this.imageElement = imageElement;
                    this.x_offset = x_offset;
                    this.y_offset = y_offset;
                    if (dnd_utils_1.isString(this.imageElement)) {
                        // Create real image from string source
                        var imgScr = this.imageElement;
                        this.imageElement = new HTMLImageElement();
                        this.imageElement.src = imgScr;
                    }
                }
                DragImage.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                DragImage.ctorParameters = [
                    null,
                    null,
                    null,
                ];
                return DragImage;
            }()));
            exports_1("DragDropConfig", DragDropConfig = (function () {
                function DragDropConfig() {
                    this.onDragStartClass = "dnd-drag-start";
                    this.onDragEnterClass = "dnd-drag-enter";
                    this.onDragOverClass = "dnd-drag-over";
                    this.onSortableDragClass = "dnd-sortable-drag";
                    this.dragEffect = DataTransferEffect.MOVE;
                    this.dropEffect = DataTransferEffect.MOVE;
                    this.dragCursor = "move";
                }
                DragDropConfig.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                DragDropConfig.ctorParameters = [];
                return DragDropConfig;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRuZC5jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUtXLGtCQUFrQixFQWlCbEIsU0FBUyxFQXlCVCxjQUFjOzs7Ozs7Ozs7O1lBMUNkLGdDQUFBLGtCQUFrQixHQUFHLENBQUM7Z0JBQzdCLDRCQUE0QixJQUFJO29CQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFDRCxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekQsa0JBQWtCLENBQUMsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pELGtCQUFrQixDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RCxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekQsa0JBQWtCLENBQUMsVUFBVSxHQUFHO29CQUM1QixFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO2lCQUN2QixDQUFDO2dCQUNGLGtCQUFrQjtnQkFDbEIsa0JBQWtCLENBQUMsY0FBYyxHQUFHO29CQUNoQyxJQUFJO2lCQUNQLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQzlCLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNNLHVCQUFBLFNBQVMsR0FBRyxDQUFDO2dCQUNwQixtQkFBbUIsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRO29CQUMvQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7b0JBQUMsQ0FBQztvQkFDMUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLG9CQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsdUNBQXVDO3dCQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO29CQUNuQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsU0FBUyxDQUFDLFVBQVUsR0FBRztvQkFDbkIsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRTtpQkFDdkIsQ0FBQztnQkFDRixrQkFBa0I7Z0JBQ2xCLFNBQVMsQ0FBQyxjQUFjLEdBQUc7b0JBQ3ZCLElBQUk7b0JBQ0osSUFBSTtvQkFDSixJQUFJO2lCQUNQLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDTSw0QkFBQSxjQUFjLEdBQUcsQ0FBQztnQkFDekI7b0JBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO29CQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7b0JBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDO29CQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsY0FBYyxDQUFDLFVBQVUsR0FBRztvQkFDeEIsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRTtpQkFDdkIsQ0FBQztnQkFDRixrQkFBa0I7Z0JBQ2xCLGNBQWMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzFCLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQzs7OztBQUNMLHNDQUFzQyJ9
System.register("src/dnd.service", ["node_modules/@angular/core/bundles/core.umd", "src/dnd.config", "src/dnd.utils"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, dnd_config_1, dnd_utils_1;
    var DragDropService, DragDropSortableService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dnd_config_1_1) {
                dnd_config_1 = dnd_config_1_1;
            },
            function (dnd_utils_1_1) {
                dnd_utils_1 = dnd_utils_1_1;
            }],
        execute: function() {
            exports_1("DragDropService", DragDropService = (function () {
                function DragDropService() {
                    this.allowedDropZones = [];
                }
                DragDropService.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                DragDropService.ctorParameters = [];
                return DragDropService;
            }()));
            exports_1("DragDropSortableService", DragDropSortableService = (function () {
                function DragDropSortableService(_config) {
                    this._config = _config;
                }
                Object.defineProperty(DragDropSortableService.prototype, "elem", {
                    get: function () {
                        return this._elem;
                    },
                    enumerable: true,
                    configurable: true
                });
                DragDropSortableService.prototype.markSortable = function (elem) {
                    if (dnd_utils_1.isPresent(this._elem)) {
                        this._elem.classList.remove(this._config.onSortableDragClass);
                    }
                    if (dnd_utils_1.isPresent(elem)) {
                        this._elem = elem;
                        this._elem.classList.add(this._config.onSortableDragClass);
                    }
                };
                DragDropSortableService.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                DragDropSortableService.ctorParameters = [
                    { type: dnd_config_1.DragDropConfig, },
                ];
                return DragDropSortableService;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkbmQuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBTVcsZUFBZSxFQVdmLHVCQUF1Qjs7Ozs7Ozs7Ozs7OztZQVh2Qiw2QkFBQSxlQUFlLEdBQUcsQ0FBQztnQkFDMUI7b0JBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxlQUFlLENBQUMsVUFBVSxHQUFHO29CQUN6QixFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO2lCQUN2QixDQUFDO2dCQUNGLGtCQUFrQjtnQkFDbEIsZUFBZSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDM0IsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ00scUNBQUEsdUJBQXVCLEdBQUcsQ0FBQztnQkFDbEMsaUNBQWlDLE9BQU87b0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUMzQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRTtvQkFDN0QsR0FBRyxFQUFFO3dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN0QixDQUFDO29CQUNELFVBQVUsRUFBRSxJQUFJO29CQUNoQixZQUFZLEVBQUUsSUFBSTtpQkFDckIsQ0FBQyxDQUFDO2dCQUNILHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxJQUFJO29CQUMzRCxFQUFFLENBQUMsQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2xFLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFDRix1QkFBdUIsQ0FBQyxVQUFVLEdBQUc7b0JBQ2pDLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUU7aUJBQ3ZCLENBQUM7Z0JBQ0Ysa0JBQWtCO2dCQUNsQix1QkFBdUIsQ0FBQyxjQUFjLEdBQUc7b0JBQ3JDLEVBQUUsSUFBSSxFQUFFLDJCQUFjLEdBQUc7aUJBQzVCLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1lBQ25DLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQzs7OztBQUNMLHVDQUF1QyJ9
System.register("src/dnd.utils", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Check and return true if an object is type of string
     */
    function isString(obj) {
        return typeof obj === "string";
    }
    exports_1("isString", isString);
    /**
     * Check and return true if an object not undefined or null
     */
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    exports_1("isPresent", isPresent);
    /**
     * Check and return true if an object is type of Function
     */
    function isFunction(obj) {
        return typeof obj === "function";
    }
    exports_1("isFunction", isFunction);
    /**
     * Create Image element with specified url string
     */
    function createImage(src) {
        var img = new HTMLImageElement();
        img.src = src;
        return img;
    }
    exports_1("createImage", createImage);
    /**
     * Call the function
     */
    function callFun(fun) {
        return fun();
    }
    exports_1("callFun", callFun);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG5kLnV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBOztPQUVHO0lBQ0gsa0JBQXlCLEdBQUc7UUFDeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRkQsK0JBRUMsQ0FBQTtJQUNEOztPQUVHO0lBQ0gsbUJBQTBCLEdBQUc7UUFDekIsTUFBTSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRkQsaUNBRUMsQ0FBQTtJQUNEOztPQUVHO0lBQ0gsb0JBQTJCLEdBQUc7UUFDMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBRkQsbUNBRUMsQ0FBQTtJQUNEOztPQUVHO0lBQ0gscUJBQTRCLEdBQUc7UUFDM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFKRCxxQ0FJQyxDQUFBO0lBQ0Q7O09BRUc7SUFDSCxpQkFBd0IsR0FBRztRQUN2QixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUZELDZCQUVDLENBQUE7Ozs7Ozs7QUFDRCxxQ0FBcUMifQ==
System.register("src/abstract.component", ["node_modules/@angular/core/bundles/core.umd", "src/dnd.config", "src/dnd.service", "src/dnd.utils"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, core_2, dnd_config_1, dnd_service_1, dnd_utils_1;
    var AbstractComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (dnd_config_1_1) {
                dnd_config_1 = dnd_config_1_1;
            },
            function (dnd_service_1_1) {
                dnd_service_1 = dnd_service_1_1;
            },
            function (dnd_utils_1_1) {
                dnd_utils_1 = dnd_utils_1_1;
            }],
        execute: function() {
            exports_1("AbstractComponent", AbstractComponent = (function () {
                function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
                    var _this = this;
                    this._dragDropService = _dragDropService;
                    this._config = _config;
                    this._cdr = _cdr;
                    /**
                     * Whether the object is draggable. Default is true.
                     */
                    this._dragEnabled = false;
                    /**
                     * Allows drop on this element
                     */
                    this.dropEnabled = false;
                    this.dropZones = [];
                    this.cloneItem = false;
                    this._elem = elemRef.nativeElement;
                    //
                    // DROP events
                    //
                    this._elem.ondragenter = function (event) {
                        _this._onDragEnter(event);
                    };
                    this._elem.ondragover = function (event) {
                        _this._onDragOver(event);
                        //
                        if (event.dataTransfer != null) {
                            event.dataTransfer.dropEffect = _this._config.dropEffect.name;
                        }
                        return false;
                    };
                    this._elem.ondragleave = function (event) {
                        _this._onDragLeave(event);
                    };
                    this._elem.ondrop = function (event) {
                        _this._onDrop(event);
                    };
                    //
                    // Drag events
                    //
                    this._elem.ondragstart = function (event) {
                        // console.log('ondragstart', event.target);
                        _this._onDragStart(event);
                        //
                        if (event.dataTransfer != null) {
                            event.dataTransfer.setData('text', '');
                            // Change drag effect
                            event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                            // Change drag image
                            if (dnd_utils_1.isPresent(_this.dragImage)) {
                                if (dnd_utils_1.isString(_this.dragImage)) {
                                    event.dataTransfer.setDragImage(dnd_utils_1.createImage(_this.dragImage));
                                }
                                else if (dnd_utils_1.isFunction(_this.dragImage)) {
                                    event.dataTransfer.setDragImage(dnd_utils_1.callFun(_this.dragImage));
                                }
                                else {
                                    var img = _this.dragImage;
                                    event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                                }
                            }
                            else if (dnd_utils_1.isPresent(_this._config.dragImage)) {
                                var dragImage = _this._config.dragImage;
                                event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                            }
                            else if (_this.cloneItem) {
                                _this._dragHelper = _this._elem.cloneNode(true);
                                _this._dragHelper.classList.add('dnd-drag-item');
                                _this._dragHelper.style.position = "absolute";
                                _this._dragHelper.style.top = "0px";
                                _this._dragHelper.style.left = "-1000px";
                                _this._elem.parentElement.appendChild(_this._dragHelper);
                                event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                            }
                            // Change drag cursor
                            if (_this._dragEnabled) {
                                _this._elem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                            }
                            else {
                                _this._elem.style.cursor = _this._defaultCursor;
                            }
                        }
                    };
                    this._elem.ondragend = function (event) {
                        if (_this._elem.parentElement && _this._dragHelper) {
                            _this._elem.parentElement.removeChild(_this._dragHelper);
                        }
                        // console.log('ondragend', event.target);
                        _this._onDragEnd(event);
                        // Restore style of dragged element
                        _this._elem.style.cursor = _this._defaultCursor;
                    };
                }
                Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
                    get: function () {
                        return this._dragEnabled;
                    },
                    set: function (enabled) {
                        this._dragEnabled = !!enabled;
                        this._elem.draggable = this._dragEnabled;
                    },
                    enumerable: true,
                    configurable: true
                });
                /******* Change detection ******/
                AbstractComponent.prototype.detectChanges = function () {
                    var _this = this;
                    // Programmatically run change detection to fix issue in Safari
                    setTimeout(function () {
                        _this._cdr.detectChanges();
                    }, 250);
                };
                //****** Droppable *******//
                AbstractComponent.prototype._onDragEnter = function (event) {
                    // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
                    if (this._isDropAllowed) {
                        // event.preventDefault();
                        this._onDragEnterCallback(event);
                    }
                };
                AbstractComponent.prototype._onDragOver = function (event) {
                    // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
                    if (this._isDropAllowed) {
                        // The element is over the same source element - do nothing
                        if (event.preventDefault) {
                            // Necessary. Allows us to drop.
                            event.preventDefault();
                        }
                        this._onDragOverCallback(event);
                    }
                };
                AbstractComponent.prototype._onDragLeave = function (event) {
                    // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
                    if (this._isDropAllowed) {
                        // event.preventDefault();
                        this._onDragLeaveCallback(event);
                    }
                };
                AbstractComponent.prototype._onDrop = function (event) {
                    // console.log('ondrop._isDropAllowed', this._isDropAllowed);
                    if (this._isDropAllowed) {
                        if (event.preventDefault) {
                            // Necessary. Allows us to drop.
                            event.preventDefault();
                        }
                        if (event.stopPropagation) {
                            // Necessary. Allows us to drop.
                            event.stopPropagation();
                        }
                        this._onDropCallback(event);
                        this.detectChanges();
                    }
                };
                Object.defineProperty(AbstractComponent.prototype, "_isDropAllowed", {
                    get: function () {
                        if (this._dragDropService.isDragged && this.dropEnabled) {
                            // First, if `allowDrop` is set, call it to determine whether the
                            // dragged element can be dropped here.
                            if (this.allowDrop) {
                                return this.allowDrop(this._dragDropService.dragData);
                            }
                            // Otherwise, use dropZones if they are set.
                            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                                return true;
                            }
                            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                                var dragZone = this._dragDropService.allowedDropZones[i];
                                if (this.dropZones.indexOf(dragZone) !== -1) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                //*********** Draggable **********//
                AbstractComponent.prototype._onDragStart = function (event) {
                    // console.log('ondragstart.dragEnabled', this._dragEnabled);
                    if (this._dragEnabled) {
                        this._dragDropService.allowedDropZones = this.dropZones;
                        // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
                        this._onDragStartCallback(event);
                    }
                };
                AbstractComponent.prototype._onDragEnd = function (event) {
                    this._dragDropService.allowedDropZones = [];
                    // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
                    this._onDragEndCallback(event);
                };
                //**** Drop Callbacks ****//
                AbstractComponent.prototype._onDragEnterCallback = function (event) { };
                AbstractComponent.prototype._onDragOverCallback = function (event) { };
                AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
                AbstractComponent.prototype._onDropCallback = function (event) { };
                //**** Drag Callbacks ****//
                AbstractComponent.prototype._onDragStartCallback = function (event) { };
                AbstractComponent.prototype._onDragEndCallback = function (event) { };
                AbstractComponent.decorators = [
                    { type: core_1.Injectable },
                ];
                /** @nocollapse */
                AbstractComponent.ctorParameters = [
                    { type: core_2.ElementRef, },
                    { type: dnd_service_1.DragDropService, },
                    { type: dnd_config_1.DragDropConfig, },
                    { type: core_1.ChangeDetectorRef, },
                ];
                return AbstractComponent;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJzdHJhY3QuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFRVyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQWpCLCtCQUFBLGlCQUFpQixHQUFHLENBQUM7Z0JBQzVCLDJCQUEyQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUk7b0JBQy9ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO29CQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCOzt1QkFFRztvQkFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUI7O3VCQUVHO29CQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDbkMsRUFBRTtvQkFDRixjQUFjO29CQUNkLEVBQUU7b0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsVUFBVSxLQUFLO3dCQUNwQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QixDQUFDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxLQUFLO3dCQUNuQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN6QixFQUFFO3dCQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs0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
System.register("index", ["node_modules/@angular/core/bundles/core.umd", "node_modules/@angular/common/bundles/common.umd", "src/dnd.config", "src/dnd.service", "src/draggable.component", "src/droppable.component", "src/sortable.component", "src/abstract.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, dnd_config_1, dnd_service_1, draggable_component_1, droppable_component_1, sortable_component_1;
    var DND_PROVIDERS, DND_DIRECTIVES, DndModule;
    var exportedNames_1 = {
        'DND_PROVIDERS': true,
        'DND_DIRECTIVES': true,
        'DndModule': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (dnd_config_1_1) {
                dnd_config_1 = dnd_config_1_1;
                exportStar_1(dnd_config_1_1);
            },
            function (dnd_service_1_1) {
                dnd_service_1 = dnd_service_1_1;
                exportStar_1(dnd_service_1_1);
            },
            function (draggable_component_1_1) {
                draggable_component_1 = draggable_component_1_1;
                exportStar_1(draggable_component_1_1);
            },
            function (droppable_component_1_1) {
                droppable_component_1 = droppable_component_1_1;
                exportStar_1(droppable_component_1_1);
            },
            function (sortable_component_1_1) {
                sortable_component_1 = sortable_component_1_1;
                exportStar_1(sortable_component_1_1);
            },
            function (abstract_component_1_1) {
                exportStar_1(abstract_component_1_1);
            }],
        execute: function() {
            exports_1("DND_PROVIDERS", DND_PROVIDERS = [dnd_config_1.DragDropConfig, dnd_service_1.DragDropService, dnd_service_1.DragDropSortableService]);
            exports_1("DND_DIRECTIVES", DND_DIRECTIVES = [draggable_component_1.DraggableComponent, droppable_component_1.DroppableComponent, sortable_component_1.SortableContainer, sortable_component_1.SortableComponent]);
            exports_1("DndModule", DndModule = (function () {
                function DndModule() {
                }
                DndModule.forRoot = function () {
                    return {
                        ngModule: DndModule,
                        providers: [dnd_config_1.DragDropConfig, dnd_service_1.DragDropService, dnd_service_1.DragDropSortableService]
                    };
                };
                DndModule.decorators = [
                    { type: core_1.NgModule, args: [{
                                imports: [common_1.CommonModule],
                                declarations: [draggable_component_1.DraggableComponent, droppable_component_1.DroppableComponent, sortable_component_1.SortableContainer, sortable_component_1.SortableComponent],
                                exports: [draggable_component_1.DraggableComponent, droppable_component_1.DroppableComponent, sortable_component_1.SortableContainer, sortable_component_1.SortableComponent]
                            },] },
                ];
                /** @nocollapse */
                DndModule.ctorParameters = [];
                return DndModule;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBZ0JXLGFBQWEsRUFDYixjQUFjLEVBQ2QsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRlQsMkJBQUEsYUFBYSxHQUFHLENBQUMsMkJBQWMsRUFBRSw2QkFBZSxFQUFFLHFDQUF1QixDQUFDLENBQUEsQ0FBQztZQUMzRSw0QkFBQSxjQUFjLEdBQUcsQ0FBQyx3Q0FBa0IsRUFBRSx3Q0FBa0IsRUFBRSxzQ0FBaUIsRUFBRSxzQ0FBaUIsQ0FBQyxDQUFBLENBQUM7WUFDaEcsdUJBQUEsU0FBUyxHQUFHLENBQUM7Z0JBQ3BCO2dCQUNBLENBQUM7Z0JBQ0QsU0FBUyxDQUFDLE9BQU8sR0FBRztvQkFDaEIsTUFBTSxDQUFDO3dCQUNILFFBQVEsRUFBRSxTQUFTO3dCQUNuQixTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFFLDZCQUFlLEVBQUUscUNBQXVCLENBQUM7cUJBQ3hFLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO2dCQUNGLFNBQVMsQ0FBQyxVQUFVLEdBQUc7b0JBQ25CLEVBQUUsSUFBSSxFQUFFLGVBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQ0FDYixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO2dDQUN2QixZQUFZLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx3Q0FBa0IsRUFBRSxzQ0FBaUIsRUFBRSxzQ0FBaUIsQ0FBQztnQ0FDNUYsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsd0NBQWtCLEVBQUUsc0NBQWlCLEVBQUUsc0NBQWlCLENBQUM7NkJBQzFGLEVBQUUsRUFBRTtpQkFDaEIsQ0FBQztnQkFDRixrQkFBa0I7Z0JBQ2xCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQzs7OztBQUNMLGlDQUFpQyJ9