import { Component, ViewChild, OnInit } from '@angular/core';
// import { Message } from './api/message';
import { TreeNode } from './api/treeNode';
// import { MenuItem } from './api/menuitem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  filesTree0;
  files;
  selectedFiles;
  selectedFiles2 = [];
  dataArray = [];
  dataArray2 = [];
  constructor() { }

  expandAll() {
    this.filesTree0.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  private expandRecursive(node, isExpand) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  public ngOnInit() {
    this.filesTree0 =
      [{
        'levelType': 'state',
        'levelName': 'Karnataka',
        'code': 'KA',
        'id': 'KA',
        'levelCategory': 'STANDARD',
        'isExpandable': true,
        'isEditable': false,
        'isSelected': false,
        'subTerritoryLevel': [{
          'levelType': 'Zone',
          'levelName': 'East',
          'code': null,
          'id': 'KA-Ease',
          'levelCategory': 'CUSTOM',
          'isExpandable': false,
          'isEditable': false,
          'isSelected': false,
          'subTerritoryLevel': []
        }, {
          'levelType': 'Zone',
          'levelName': 'West',
          'code': null,
          'id': 'KA-West',
          'levelCategory': 'CUSTOM',
          'isExpandable': false,
          'isEditable': false,
          'isSelected': true,
          'subTerritoryLevel': [{
            'levelType': 'district',
            'levelName': 'Bangalore Urban',
            'code': null,
            'id': 'KA-West-BLR',
            'levelCategory': 'STANDARD',
            'isExpandable': true,
            'isEditable': false,
            'isSelected': true,
            'subTerritoryLevel': [{
              'levelType': 'town',
              'levelName': 'Bengaluru',
              'code': null,
              'id': 'KA-West-BLR-BLR',
              'levelCategory': 'STANDARD',
              'isExpandable': true,
              'isEditable': false,
              'isSelected': true,
              'subTerritoryLevel': [{
                'levelType': 'pincode',
                'levelName': null,
                'code': null,
                'id': 'KA-West-BLR-BLR-PINCODE',
                'levelCategory': 'STANDARD',
                'isExpandable': true,
                'isEditable': false,
                'isSelected': false,
                'subTerritoryLevel': []
              }]
            }]
          }]
        }, {
          'levelType': 'Zone',
          'levelName': 'North',
          'code': null,
          'id': 'KA-North',
          'levelCategory': 'CUSTOM',
          'isExpandable': false,
          'isEditable': false,
          'isSelected': false,
          'subTerritoryLevel': []
        }, {
          'levelType': 'Zone',
          'levelName': 'South',
          'code': null,
          'id': 'KA-South',
          'levelCategory': 'CUSTOM',
          'isExpandable': false,
          'isEditable': false,
          'isSelected': false,
          'subTerritoryLevel': []
        }]
      }, {
        'levelType': 'state',
        'levelName': 'Andhra Pradesh',
        'code': 'AP',
        'id': 'AP',
        'levelCategory': 'STANDARD',
        'isExpandable': true,
        'isEditable': false,
        'isSelected': true,
        'subTerritoryLevel': [{
          'levelType': 'district',
          'levelName': 'Vishakhapatnam',
          'code': null,
          'id': 'AP-VISH',
          'levelCategory': 'STANDARD',
          'isExpandable': true,
          'isEditable': false,
          'isSelected': true,
          'subTerritoryLevel': [{
            'levelType': 'town',
            'levelName': 'Visakhapatnam Child',
            'code': null,
            'id': 'AP-VISH_child',
            'levelCategory': 'STANDARD',
            'isExpandable': true,
            'isEditable': false,
            'isSelected': true,
            'subTerritoryLevel': [{
              'levelType': 'pincode',
              'levelName': null,
              'code': null,
              'id': 'AP-VISH-cjild-PINCODE',
              'levelCategory': 'STANDARD',
              'isExpandable': true,
              'isEditable': false,
              'isSelected': false,
              'subTerritoryLevel': []
            }, {
              'levelType': 'pincode',
              'levelName': null,
              'code': null,
              'id': 'AP-VISH-cjild-PINCODE-2',
              'levelCategory': 'STANDARD',
              'isExpandable': true,
              'isEditable': false,
              'isSelected': false,
              'subTerritoryLevel': []
            }]
          }]
        }, {
          'levelType': 'district',
          'levelName': 'Anantapuram',
          'code': null,
          'id': 'AP-ANA',
          'levelCategory': 'STANDARD',
          'isExpandable': true,
          'isEditable': false,
          'isSelected': false,
          'subTerritoryLevel': []
        }]
      }];
    this.modifyData(this.filesTree0);


    this.files =
      [
        {
          "label": "Documents",
          "data": "Documents Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "leaf": false,
          "children": [{
            "label": "Work",
            "data": "Work Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "leaf": false,
            "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document", "leaf": true }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document", "leaf": true }]
          },
          {
            "label": "Home",
            "data": "Home Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "leaf": false,
            "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month", "leaf": true }]
          }]
        },
        {
          "label": "Pictures",
          "data": "Pictures Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "leaf": false,
          "children": [
            { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo", "leaf": true },
            { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo", "leaf": true },
            { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo", "leaf": true }]
        },
        {
          "label": "Movies",
          "data": "Movies Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "leaf": false,
          "children": [{
            "label": "Al Pacino",
            "data": "Pacino Movies",
            "leaf": false,
            "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie", "leaf": true }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie", "leaf": true }]
          },
          {
            "label": "Robert De Niro",
            "data": "De Niro Movies",
            "leaf": false,
            "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie", "leaf": true }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie", "leaf": true }]
          }]
        }
      ];
    this.dataArray = ["Expenses Document", "Invoices for this month", "PrimeFaces Logo", "Untouchables Movie", "Goodfellas Movie"];
    this.dataArray2 = [
      "AP-ANA",
      "KA-West-BLR-BLR-PINCODE",
      "KA-Ease",
      "KA-North",
      "KA-South",
      "AP-VISH-cjild-PINCODE-2",
      // "AP-VISH_child"
    ]
    this.selectedFiles = [];
    // this.checkNode(this.files, this.dataArray);
    this.checkNode(this.filesTree0, this.dataArray2);
    console.log(this.filesTree0);
    console.log(this.selectedFiles);

    this.expandAll();

  }

  checkNode(nodes, str) {
    this.addLeafFlag(nodes);
    for (let i = 0; i < nodes.length; i++) {
      if (str.indexOf(nodes[i].id) > -1) {
        if (this.selectedFiles.indexOf(nodes[i]) === -1) {
          this.selectedFiles.push(nodes[i]);
        }
      }
      if (!nodes[i].leaf) {
        for (let j = 0; j < nodes[i].children.length; j++) {
          console.log(nodes[i].children[j].id);
          if (str.find((st) => st === nodes[i].children[j].id)) {
            if (!this.selectedFiles.find((f) => f.id === nodes[i].children[j].id)) {
              this.selectedFiles.push(nodes[i].children[j]);
            }
          }
        }

        this.checkNode(nodes[i].children, str);

      }
      let count = nodes[i].children.length;
      let c = 0;
      for (let j = 0; j < nodes[i].children.length; j++) {
        if (this.selectedFiles.includes(nodes[i].children[j])) {
          c++;
        }
        if (nodes[i].children[j].partialSelected) nodes[i].partialSelected = true;
      }
      if (c == 0) { }
      else if (c == count) {
        nodes[i].partialSelected = false;
        if (!this.selectedFiles.includes(nodes[i])) {
          this.selectedFiles.push(nodes[i]);
        }
      }
      else {
        nodes[i].partialSelected = true;
      }
    }
  }


  addLeafFlag(nodes) {
    nodes.forEach(node => {
      if (node.children.length > 0) {
        node.leaf = false;
        this.addLeafFlag(node.children);
      } else {
        // console.log(node.id)
        node.leaf = true;
      }
    });
  }
  modifyData(data) {
    data.forEach(element => {
      element.label = element.id;
      element.children = element.subTerritoryLevel;
      delete element.subTerritoryLevel;
      if (element.children.length > 0) {
        this.modifyData(element.children);
      }
    });
  }

  nodeSelect(event) {
    console.log(this.selectedFiles);
    // event.node.isSelected = true;
  }

  nodeUnselect(event) {
    console.log(this.selectedFiles2);
  }

  menuSelect(event) {
    console.log(event);
  }
  nodeExpand(event) {
    console.log(this.selectedFiles2);
    if (event.node) {
      // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      // this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
    }
  }

  onSubmit() {
    const nodes = [];
    console.log(this.selectedFiles2);
    this.selectedFiles2.forEach(element => {
      if (element.children.length === 0) {
        nodes.push(element);
      }
    });
    console.log(nodes);
  }
}
