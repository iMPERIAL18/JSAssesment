/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let NFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, height) {
    let metaData = { "name": name, "eyeColor": eyeColor, "shirtType": shirtType, "height": height };
    NFT.push(metaData);
}



// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (i = 0; i < NFT.length; i++) {
        console.log("\n");
        console.log(i + 1 + ".");
        console.log("Name: " + NFT[i].name + "\nEye Color: " + NFT[i].eyeColor);
        console.log("Shirt Type: " + NFT[i].shirtType + "\nHeight: " + NFT[i].height);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply of NFTs are " + NFT.length);
}

// call your functions below this line


mintNFT("Alex", "black", "white", "160cm");
mintNFT("Josh", "green", "purple", "157cm");
mintNFT("Claire", "blue", "magenta", "175cm");
mintNFT("Taylor", "black", "navy blue", "150cm");
listNFTs();
getTotalSupply();