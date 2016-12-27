import { inject, TestBed } from '@angular/core/testing';
import { DragDropConfig } from '../src/dnd.config';
import { DraggableComponent } from '../src/draggable.component';
import { DroppableComponent } from '../src/droppable.component';
import { DragDropService } from '../src/dnd.service';
import { Container, triggerEvent } from './dnd.component.factory';
describe('Drag and Drop without draggable data', function () {
    var componentFixture;
    var dragdropService;
    var config;
    var container;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [DraggableComponent, DroppableComponent, Container],
            providers: [DragDropConfig, DragDropService]
        });
        TestBed.compileComponents();
    });
    beforeEach(inject([DragDropConfig, DragDropService], function (c, dd) {
        dragdropService = dd;
        config = c;
        componentFixture = TestBed.createComponent(Container);
        componentFixture.detectChanges();
        container = componentFixture.componentInstance;
    }));
    it('should be defined', function () {
        expect(componentFixture).toBeDefined();
    });
    it('Drop events should not be activated on the wrong drop-zone', function (done) {
        var dragElemOne = componentFixture.elementRef.nativeElement.querySelector('#dragIdOne');
        var dropElemTwo = componentFixture.elementRef.nativeElement.querySelector('#dropIdTwo');
        triggerEvent(dragElemOne, 'dragstart', 'MouseEvent');
        triggerEvent(dropElemTwo, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemTwo.classList.contains(config.onDragEnterClass)).toEqual(false);
        triggerEvent(dropElemTwo, 'dragover', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemTwo.classList.contains(config.onDragOverClass)).toEqual(false);
        var dragCount = 0, dropCount = 0;
        container.dragOne.subscribe(function ($event) {
            dragCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dragCount).toBe(0);
        });
        container.dropTwo.subscribe(function ($event) {
            dropCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dropCount).toBe(0);
        });
        triggerEvent(dropElemTwo, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
    it('Drop events should be activated on the same drop-zone', function (done) {
        var dragElemOne = componentFixture.elementRef.nativeElement.querySelector('#dragIdOne');
        var dropElemOne = componentFixture.elementRef.nativeElement.querySelector('#dropIdOne');
        triggerEvent(dragElemOne, 'dragstart', 'MouseEvent');
        triggerEvent(dropElemOne, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOne.classList.contains(config.onDragEnterClass)).toEqual(true);
        triggerEvent(dropElemOne, 'dragover', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOne.classList.contains(config.onDragOverClass)).toEqual(true);
        var dragCount = 0, dropCount = 0;
        container.dragOne.subscribe(function ($event) {
            dragCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dragCount).toBe(1);
        });
        container.dropOne.subscribe(function ($event) {
            dropCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dropCount).toBe(1);
        });
        triggerEvent(dropElemOne, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
    it('Drop events on multiple drop-zone', function (done) {
        var dragElemOneTwo = componentFixture.elementRef.nativeElement.querySelector('#dragIdOneTwo');
        var dropElemOneTwo = componentFixture.elementRef.nativeElement.querySelector('#dropIdOneTwo');
        triggerEvent(dragElemOneTwo, 'dragstart', 'MouseEvent');
        triggerEvent(dropElemOneTwo, 'dragenter', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOneTwo.classList.contains(config.onDragEnterClass)).toEqual(true);
        triggerEvent(dropElemOneTwo, 'dragover', 'MouseEvent');
        componentFixture.detectChanges();
        expect(dropElemOneTwo.classList.contains(config.onDragOverClass)).toEqual(true);
        var dragCount = 0, dropCount = 0;
        container.dragOne.subscribe(function ($event) {
            dragCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dragCount).toBe(1);
        });
        container.dropOne.subscribe(function ($event) {
            dropCount++;
        }, function (error) { }, function () {
            // Here is a function called when stream is complete
            expect(dropCount).toBe(1);
        });
        triggerEvent(dropElemOneTwo, 'drop', 'MouseEvent');
        componentFixture.detectChanges();
        done();
    });
});
