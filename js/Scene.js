        if (BABYLON.Engine.isSupported()) {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true, null, false);
        var scene = new BABYLON.Scene(engine);     
        // Creates, angles, distances and targets the camera
	    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0 , 150, 0), scene);
        // This positions the camera
        scene.activeCamera = camera;
        scene.autoClear= false;
        camera.setPosition(new BABYLON.Vector3(0 , 150, -150));    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, false);
//        camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
        var light1_front = new BABYLON.HemisphericLight("Omni1", new BABYLON.Vector3(0, 1, -1), scene);
        scene.beforeCameraRender = function () {
        light1_front.intensity = 1.6;        
        };

        engine.runRenderLoop(function () {
                    scene.render();
//                    scene.onPointerUp = function(){
//                   console.log(camera.position);
//                }
            })
        }else{
        alert("WebGL not supported in this browser.");
        }


function mesh_enable(){
    
    $.getScript("js/UA.js",function(){
    A = new UA.MeshFactory(scene);
    Amesh = A.instance("UA")
    Amesh.position = new BABYLON.Vector3(0,50,20);
    })     
} 


function mesh_disable(){
    if(scene.getMeshByID("UA")) Amesh.dispose(false,true);
}

function Recomputenormals(){
    
 BABYLON.Mesh.prototype.ComputeNorms = function() {
        var indices = this.getIndices();
        var vertices = this.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        var normals = this.getVerticesData(BABYLON.VertexBuffer.NormalKind);
//        var uvs = [];
        BABYLON.VertexData.ComputeNormals(this.getVerticesData(BABYLON.VertexBuffer.PositionKind),this.getIndices(), this.getVerticesData(BABYLON.VertexBuffer.NormalKind));
//        BABYLON.VertexData._ComputeSides(BABYLON.Mesh.BACKSIDE,vertices,indices,normals,uvs);

        this.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals);
    }
 
 Amesh.ComputeNorms();
}

