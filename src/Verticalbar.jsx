import React from 'react';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import './App.css'



export function Verticalbar() {
 

  return (
    <div className='parrent'>
      <div className='parmar'>
      <div className='admin'>
      <Typography variant="h6" component="div">
        <a className='sb' href="#"><TagFacesIcon/>SB ADMIN<span>2</span></a>
      </Typography>
      </div>

      <hr></hr>
      <Typography variant="p" component="div">
        <a className='sb' href="#">Dashboard</a>
      </Typography>
      <hr/>
      <p className='sb'>INTERFACE</p>
      <br/>
      <div className='component-dropdown'>
       
         <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<SettingsIcon/>}
      multiSelect
      sx={{ flexGrow: 1, maxWidth: 160,  }}
    >
        <TreeItem nodeId="1" label="components">
        <div className='aa'>
        <TreeItem nodeId="2" label="Buttons" />
        <TreeItem nodeId="3" label="Cards" />
        </div>
      </TreeItem>
      </TreeView>
      </div>
      <br/>
      <div className='utilities'>
     
         <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<BuildIcon/>}
      
      multiSelect
      sx={{ flexGrow: 1, maxWidth: 160,  }}
    >
        <TreeItem  nodeId="1" label="Utilities" >
        <div className='aa'>
          <span>CUSTOM UTILITIES:</span>
        <TreeItem nodeId="2" label="color" />
        <TreeItem nodeId="3" label="Border" />
        <TreeItem nodeId="4" label="Animation" />
        <TreeItem nodeId="3" label="Others" />
        </div>
      </TreeItem>
      </TreeView>
       
      </div>
      <hr />
      <br/>
      <p className='sb'>ADDONS</p>
      <br/>
      <div className='pages'>
         <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<FolderIcon/>}
      color={'white'}
      multiSelect
      sx={{ flexGrow: 1, maxWidth: 160,  }}
    >
        <TreeItem nodeId="1" label="Pages">
        <div className='aa'>
          <span >LOGIN SCREENS:</span>
        <TreeItem nodeId="2" label="Register" />
        <TreeItem nodeId="3" label="Login" />
        <TreeItem nodeId="4" label="Forget password" />
        <span >OTHER PAGES:</span>
        <TreeItem nodeId="5" label="404 error" />
        <TreeItem nodeId="6" label="blank page" />
        </div>
      </TreeItem>
      </TreeView>
      </div>
      <br/>
      <div className='chart'>
      <TreeView  defaultEndIcon={<BarChartIcon/>} multiSelect sx={{ flexGrow: 1, maxWidth: 160,  }}><TreeItem nodeId="1" label="Chart"/></TreeView>
      </div>
      <br></br>
       <div className='table'>
      <TreeView  defaultEndIcon={<TableChartIcon/>} multiSelect sx={{ flexGrow: 1, maxWidth: 160,  }}><TreeItem nodeId="1" label="Tables"/></TreeView>
       </div>
      </div>
      <br/>
      <hr/>
    </div>

  );
}
