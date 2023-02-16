//runs before web page is loaded into the browser window
//has access to both DOM APIs and Node.js environment
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'versions', 
        {
            node: () => process.versions.node,
            chrome: () => process.versions.chrome,
            electron: () => process.versions.electron,
            ping:() => ipcRenderer.invoke('ping')//sender
            // we can also expose variables, not just functions
        }
);