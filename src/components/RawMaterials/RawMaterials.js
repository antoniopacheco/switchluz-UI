import React, { Component } from 'react';
import axios from 'axios';
class RawMaterials extends Component {

    constructor(){
        super();
        this.state = {
            rawMaterials: []
        }
    }
    componentWillMount() {
        this.getRawMaterials();
    }

    getRawMaterials(){
        const filter = {
            include: ["folder","procedency","UnitMeasurement","materialType"]
        }
        axios.get(`http://localhost:3000/api/RawMaterials?filter=${JSON.stringify(filter)}`)
        .then(response => {
            this.setState({
                rawMaterials: response.data
            });
        })
    }

    render(){
        const rawMaterialItem = this.state.rawMaterials.map((rawMaterial, index) => {
            return (
                <tr key= { rawMaterial.id } >
                    <td> { rawMaterial.no_inv } </td>
                    <td> { rawMaterial.description } </td>
                    <td> { rawMaterial.procedency.abrev } </td>
                    <td> { rawMaterial.materialType.name } </td>
                    <td> { rawMaterial.folder.name } </td>
                </tr>
            )
        })
        return (
            <div>
                <h1>Raw Materials</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No Inv</th>
                            <th>Description</th>
                            <th>Procedency</th>
                            <th>Type</th>
                            <th>Folder</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rawMaterialItem }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RawMaterials;