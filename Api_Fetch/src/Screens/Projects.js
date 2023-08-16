import React, {useEffect, useState} from 'react';
import {FlatList, View} from "react-native";
import Card from "../Components/Card";

const Projects = () => {
    const [projects, setProjects] = useState([])
    const getApiData = async (api) => {
        try {
            const data = await fetch(api);
            const response = await data.json();
            setProjects(response.success);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getApiData(`https://portfolio-sakil.onrender.com/allProjects`);
    }, []);
    return (
        <View>
            <FlatList
                data={projects}
                keyExtractor={({_id}) => _id}
                renderItem={({item}) => {
                    const {image, name, stack, github, demo} = item;
                    return (
                        <Card imageSrc={image} name={name} stack={stack} githubUrl={github} demoUrl={demo}/>
                    );
                }}
            />
        </View>
    );
};


export default Projects;