// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropConfig } from './src/dnd.config';
import { DragDropService, DragDropSortableService } from './src/dnd.service';
import { DraggableComponent } from './src/draggable.component';
import { DroppableComponent } from './src/droppable.component';
import { SortableContainer, SortableComponent } from './src/sortable.component';
export * from './src/abstract.component';
export * from './src/dnd.config';
export * from './src/dnd.service';
export * from './src/draggable.component';
export * from './src/droppable.component';
export * from './src/sortable.component';
export var DND_PROVIDERS = [DragDropConfig, DragDropService, DragDropSortableService];
export var DND_DIRECTIVES = [DraggableComponent, DroppableComponent, SortableContainer, SortableComponent];
export var DndModule = (function () {
    function DndModule() {
    }
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule,
            providers: [DragDropConfig, DragDropService, DragDropSortableService]
        };
    };
    DndModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [DraggableComponent, DroppableComponent, SortableContainer, SortableComponent],
                    exports: [DraggableComponent, DroppableComponent, SortableContainer, SortableComponent]
                },] },
    ];
    /** @nocollapse */
    DndModule.ctorParameters = [];
    return DndModule;
}());
//# sourceMappingURL=index.js.map