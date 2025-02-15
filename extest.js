try {
    console.log("Trying");
    throw Error("Intn error");
} catch (err) {
    console.log("Catch");
    console.log(err.message);
} finally {
    console.log("Finally")
}