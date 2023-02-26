const main = async () => {
    const nftContractFacory = await hre.ethers.getContractFactory("MyEpicNFT")
    const nftContract = await nftContractFacory.deploy()
    await nftContract.deployed()

    console.log("Contract deployed to:", nftContract.address)



    let txn = await nftContract.makeAnEpicNFT()
    await txn.wait()

    txn = await nftContract.makeAnEpicNFT()
    await txn.wait()
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()
