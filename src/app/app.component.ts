import { Component, ViewChild, OnInit } from '@angular/core';
// import { Message } from './api/message';
// import { TreeNode } from './api/treeNode';
// import { MenuItem } from './api/menuitem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  filesTree0;

  selectedFiles2 = [];

  constructor() { }

  public ngOnInit() {
    this.filesTree0 =
      [{
        'levelType': 'state',
        'levelName': 'Karnataka',
        'code': 'KA',
        'id': 'ChIJj0i_N0xaozsR1Xx10YzS8UE',
        'levelCategory': 'STANDARD',
        'isExpandable': true,
        'isEditable': false,
        'isSelected': false,
        'subTerritoryLevel': [{
          'levelType': 'Zone',
          'levelName': 'East',
          'code': null,
          'id': 'd1a66a53-6bbf-43cb-a822-0c033f8afd1e',
          'levelCategory': 'CUSTOM',
          'isExpandable': false,
          'isEditable': false,
          'isSelected': false,
          'subTerritoryLevel': []
        }, {
          'levelType': 'Zone',
          'levelName': 'West',
          'code': null,
          'id': 'eb58f44e-fd0e-4c99-8ede-1b632093d1f3',
          'levelCategory': 'CUSTOM',
          'isExpandable': false,
          'isEditable': false,
          'isSelected': true,
          'subTerritoryLevel': [{
            'levelType': 'district',
            'levelName': 'Bangalore Urban',
            'code': null,
            'id': 'ChIJ_Q7NCkQWrjsRn2yP7O-T8Fg',
            'levelCategory': 'STANDARD',
            'isExpandable': true,
            'isEditable': false,
            'isSelected': true,
            'subTerritoryLevel': [{
              'levelType': 'town',
              'levelName': 'Bengaluru',
              'code': null,
              'id': 'ChIJbU60yXAWrjsR4E9-UejD3_g',
              'levelCategory': 'STANDARD',
              'isExpandable': true,
              'isEditable': false,
              'isSelected': true,
              'subTerritoryLevel': [{
                'levelType': 'pincode',
                'levelName': null,
                'code': null,
                'id': '7484d0e5-625f-4179-ab94-0057f198e330',
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
          'id': 'af544485-3602-4f0a-b71f-6fd75a4ea83a',
          'levelCategory': 'CUSTOM',
          'isExpandable': false,
          'isEditable': false,
          'isSelected': false,
          'subTerritoryLevel': []
        }, {
          'levelType': 'Zone',
          'levelName': 'South',
          'code': null,
          'id': '9f4cb32d-224b-4bee-bb84-ef67cb22187a',
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
        'id': 'ChIJf9STrvhGNToRg82tlb670TM',
        'levelCategory': 'STANDARD',
        'isExpandable': true,
        'isEditable': false,
        'isSelected': true,
        'subTerritoryLevel': [{
          'levelType': 'district',
          'levelName': 'Vishakhapatnam',
          'code': null,
          'id': 'ChIJP5fmiRNDOToRaIRJlQPC2ZI',
          'levelCategory': 'STANDARD',
          'isExpandable': true,
          'isEditable': false,
          'isSelected': true,
          'subTerritoryLevel': [{
            'levelType': 'town',
            'levelName': 'Visakhapatnam',
            'code': null,
            'id': 'ChIJP5fmiRNDOToRaIRJlQPC2ZI',
            'levelCategory': 'STANDARD',
            'isExpandable': true,
            'isEditable': false,
            'isSelected': true,
            'subTerritoryLevel': [{
              'levelType': 'pincode',
              'levelName': null,
              'code': null,
              'id': 'a725092b-17dc-4082-95a6-244e112e0f77',
              'levelCategory': 'STANDARD',
              'isExpandable': true,
              'isEditable': false,
              'isSelected': false,
              'subTerritoryLevel': []
            }, {
              'levelType': 'pincode',
              'levelName': null,
              'code': null,
              'id': 'c1463119-ec9f-47d5-9a7e-1d031fa09acd',
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
          'id': 'ChIJ7UI4G8ZKsTsRi2DdoCb6SF4',
          'levelCategory': 'STANDARD',
          'isExpandable': true,
          'isEditable': false,
          'isSelected': false,
          'subTerritoryLevel': []
        }]
      }];
    this.modifyData(this.filesTree0);
  }

  modifyData(data) {
    data.forEach(element => {
      element.label = element.levelName;
      element.children = element.subTerritoryLevel;
      delete element.subTerritoryLevel;
      if (element.children.length > 0) {
        this.modifyData(element.children);
      }
    });
  }

  nodeSelect(event) {
    console.log(this.selectedFiles2);
    event.node.isSelected = true;
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
