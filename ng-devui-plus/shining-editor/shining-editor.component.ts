import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Quill from 'quill';
import katex from 'katex';
const win: any = window;
win.katex = katex;
import Counter from './modules/counter';
Quill.register('modules/counter', Counter);

@Component({
  selector: 'd-shining-editor',
  templateUrl: './shining-editor.component.html',
  styleUrls: ['./shining-editor.component.scss']
})
export class ShiningEditorComponent implements OnInit {
  @ViewChild('editor') editor: ElementRef;

  constructor() { }

  ngOnInit() {
    this.editor = new Quill('#editor', {
      theme: 'snow', // bubble
      modules: {
        formula: true,
        toolbar: [
          [{ header: ['1', '2', '3', false] }],
          ['bold', 'italic', 'underline', 'strike', 'link'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['clean', 'formula']
        ],
        keyboard: {
          bindings: {
            strike: {
              key: 'S',
              ctrlKey: true,
              shiftKey: true,
              handler: function(range) {
                const format = this.quill.getFormat(range);
                this.quill.format('strike', !format.strike);
              }
            },
          }
        },
        counter: true
      }
    });
  }

  save() {
    this.editor.nativeElement.contentEditable = false;
  }

  modify() {
    this.editor.nativeElement.contentEditable = true;
  }

  format(event: MouseEvent, command: string, value: string = null) {
    document.execCommand(command, false, value);

    /**
     * 撤销、重做、清除格式
     * 标题、字体、字号
     * 加粗、斜体、下划线、删除线、行内代码、上角标、下角标
     * 颜色、背景色
     * 列表、对齐、代码块、引用
     * 图片、超链接、表格
     * 全屏
     */

    /**
     * 富文本编辑器 Web API 参考
     *
     * Document.execCommand()
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
     *
     * queryCommandState(String command)
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/queryCommandState
     *
     * HTMLElement.contentEditable
     * https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/contentEditable
     *
     * Window.getSelection
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection
     *
     * Selection
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
     *
     * List of contenteditable Browser Inconsistencies
     * https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md
     */

    /**
     * Command Name
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
     *
     * backColor
     * bold
     * ClearAuthenticationCache
     * contentReadOnly
     * copy
     * createLink
     * cut
     * decreaseFontSize
     * defaultParagraphSeparator
     * delete
     * enableAbsolutePositionEditor
     * enableInlineTableEditing
     * enableObjectResizing
     * fontName
     * fontSize
     * foreColor
     * formatBlock
     * forwardDelete
     * heading
     * hiliteColor
     * increaseFontSize
     * indent
     * insertBrOnReturn
     * insertHorizontalRule
     * insertHTML
     * insertImage
     * insertOrderedList
     * insertUnorderedList
     * insertParagraph
     * insertText
     * italic
     * justifyCenter
     * justifyFull
     * justifyLeft
     * justifyRight
     * outdent
     * paste
     * redo
     * removeFormat
     * selectAll
     * strikeThrough
     * subscript
     * superscript
     * underline
     * undo
     * unlink
     * styleWithCSS
     */
  }

}
