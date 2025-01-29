import conf from "../conf/conf"

import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
       client = new Client()
       databases;
       bucket;
       constructor(){
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId)
          this.databases = new Databases(this.client)
          this.bucket = new Storage(this.client)
        }

     async createPost({title, slug, content, image, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
                {title, content, image, status, userId}
            )

        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error)
        }
     }
    
     async updatePost( slug,{title, content, image, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug,
                {title, content, image, status,}
            )

        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error)
        }
     }

     async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error)
            return false;
        }
     }

   async getPost(slug){
    try {
        await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionID,
            slug
        )
    } catch (error) {
        console.log("Appwrite service :: getPost :: error",error)
    }
   }

   async getPosts(queries = [Query.equal("status","active")]){
     try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionID,
            queries,
        )
        
     } catch (error) {
        console.log("Appwrite service :: getPosts :: error",error)
     }
   }

   async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Apprwwrite servie ::getcurrentUser: error",error)
    }
       return null;
   }
   
    async logout(){
        try {
            return await this.aacount.deleteSession();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
        }
        
    }

}

const service = new Service();

export default service;