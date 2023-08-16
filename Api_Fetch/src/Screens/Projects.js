import React, {useEffect, useState} from 'react';
import {FlatList, View} from "react-native";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const getApiData = async (api) => {
        setIsLoading(true);
        try {
            const data = await fetch(api);
            const response = await data.json();
            response.success && setIsLoading(false)
            setProjects(response.success);
        } catch (error) {
            error && setIsLoading(false);
            console.error(error)
        }
    }
    useEffect(() => {
        getApiData(`https://portfolio-sakil.onrender.com/allProjects`);
    }, []);
    return (
        <>

            {isLoading ?
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Loader/>
                </View> :
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
            }
        </>
    );
};


export default Projects;