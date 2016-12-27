import { inject, TestBed } from '@angular/core/testing';
import { DragDropConfig } from '../src/dnd.config';
import { DraggableComponent } from '../src/draggable.component';
import { DroppableComponent } from '../src/droppable.component';
import { DragDropService } from '../src/dnd.service';
import { Container2, triggerEvent } from './dnd.component.factory';
describe('Drag and Drop without draggable data', function () {
    var componentFixture;
    var dragdropService;
    var config;
    var container;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [DraggableComponent, DroppableComponent, Container2],
            providers: [DragDropConfig, DragDropService]
        });
        TestBed.compileComponents();
    });
    beforeEach(inject([DragDropConfig, DragDropService], function (c, dd) {
        dragdropService = dd;
        config = c;
        componentFixture = TestBed.createComponent(Container2);
        componentFixture.detectChanges();
        container = componentFixture.componentInstance;
    }));
    it('should be defined', function () {
        expect(componentFixture).toBeDefined();
    });
    it('It should add the "draggable" attribute', function (done) {
        var dragElem = componentFixture.elementRef.nativeElement.querySelector('#dragId');
        expect(dragElem).toBeDefined();
        expect(dragElem.attributes['draggable']).toBeTruthy();
        done();
    });
    it('Drag events should add/remove the draggable data to/from the DragDropService', function (done) {
        var dragElem = componentFixture.elementRef.nativeElement.querySelector('#dragId');
        expect(dragdropService.dragData).not.toBeDefined();
        triggerEvent(dragElem, 'dragstart', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dragdropService.dragData).toBeDefined();
        triggerEvent(dragElem, 'dragend', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dragdropService.dragData).toBeNull();
        done();
    });
    it('Drag events should add/remove the expected classes to the target element', function (done) {
        var dragElem = componentFixture.elementRef.nativeElement.querySelector('#dragId');
        expect(dragElem.classList.contains(config.onDragStartClass)).toEqual(false);
        triggerEvent(dragElem, 'dragstart', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dragElem.classList.contains(config.onDragStartClass)).toEqual(true);
        triggerEvent(dragElem, 'dragend', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dragElem.classList.contains(config.onDragStartClass)).toEqual(false);
        done();
    });
    it('Drag start event should not be activated if drag is not enabled', function (done) {
        container.dragEnabled = false;
        componentFixture.detectChanges();
        var dragElem = componentFixture.elementRef.nativeElement.querySelector('#dragId');
        expect(dragdropService.dragData).not.toBeDefined();
        expect(dragElem.classList.contains(config.onDragStartClass)).toEqual(false);
        triggerEvent(dragElem, 'dragstart', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dragdropService.dragData).not.toBeDefined();
        expect(dragElem.classList.contains(config.onDragStartClass)).toEqual(false);
        done();
    });
    it('Drop events should add/remove the expected classes to the target element', function (done) {
        var dragElem = componentFixture.elementRef.nativeElement.querySelector('#dragId');
        var dropElem = componentFixture.elementRef.nativeElement.querySelector('#dropId');
        expect(dropElem.classList.contains(config.onDragEnterClass)).toEqual(false);
        expect(dropElem.classList.contains(config.onDragOverClass)).toEqual(false);
        // The drop events should not work before a drag is started on an element with the correct drop-zone
        triggerEvent(dropElem, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElem.classList.contains(config.onDragEnterClass)).toEqual(false);
        triggerEvent(dragElem, 'dragstart', 'MouseEvent');
        triggerEvent(dropElem, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElem.classList.contains(config.onDragEnterClass)).toEqual(true);
        expect(dropElem.classList.contains(config.onDragOverClass)).toEqual(false);
        triggerEvent(dropElem, 'dragover', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElem.classList.contains(config.onDragEnterClass)).toEqual(true);
        expect(dropElem.classList.contains(config.onDragOverClass)).toEqual(true);
        triggerEvent(dropElem, 'dragleave', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElem.classList.contains(config.onDragEnterClass)).toEqual(false);
        expect(dropElem.classList.contains(config.onDragOverClass)).toEqual(false);
        triggerEvent(dropElem, 'dragover', 'MouseEvent');
        triggerEvent(dropElem, 'dragenter', 'MouseEvent');
        triggerEvent(dropElem, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElem.classList.contains(config.onDragEnterClass)).toEqual(false);
        expect(dropElem.classList.contains(config.onDragOverClass)).toEqual(false);
        done();
    });
    it('Drop event should activate the onDropSuccess and onDragSuccess callbacks', function (done) {
        var dragElem = componentFixture.elementRef.nativeElement.querySelector('#dragId');
        var dropElem = componentFixture.elementRef.nativeElement.querySelector('#dropId');
        var dragCount = 0, dropCount = 0;
        container.drag.subscribe(function ($event) {
            dragCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dragCount).toBe(0);
        });
        container.drop.subscribe(function ($event) {
            dropCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dropCount).toBe(0);
        });
        triggerEvent(dragElem, 'dragstart', 'MouseEvent');
        triggerEvent(dragElem, 'dragend', 'MouseEvent');
        triggerEvent(dragElem, 'dragstart', 'MouseEvent');
        triggerEvent(dropElem, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
    it('The onDropSuccess callback should receive the dragged data as paramenter', function (done) {
        var dragData = { id: 1, name: 'Hello' };
        container.dragData = dragData;
        componentFixture.detectChanges();
        var dragElem = componentFixture.elementRef.nativeElement.querySelector('#dragId');
        var dropElem = componentFixture.elementRef.nativeElement.querySelector('#dropId');
        container.drag.subscribe(function ($event) {
            expect($event.dragData).toBe(dragData);
        });
        container.drop.subscribe(function ($event) {
            expect($event.dragData).toBe(dragData);
        });
        triggerEvent(dragElem, 'dragstart', 'MouseEvent');
        triggerEvent(dropElem, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
});
