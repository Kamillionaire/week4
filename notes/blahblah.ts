// nodemon keeps crashing and I find the errors very confusing
// ch-three-app vs weekFour.. talk to me
// bin (www.ts)
    // in the bin, my www.ts compiled a .js file which I did not see in my myApps project.
    // this is where the port is turned on?
    // I changed 'myapp:server' to 'week4:server' on line 8.
// controllers
    // These are replaced by components files boxerCard & boxerList.
      // Should the file path on line 5 of ng/boxerList.ts be used on line 12 of ng/App.ts?

// services
    // I have no services
    // I tried to fix the error in line 10 of boxerList.ts by creating a service
    // Should "myapp.Services" be changed to week4.Services in the namespace on line 1?
    // Changed the namespace from myapp.Services to weekFour.Services
    // Changed 'boxersService' and 'BoxersService' to boxerService and 'BoxerService'
    // Added public property 'getBoxers' to 'BoxerService' as requested by error message
      // that persists in ng/boxerList/boxerList.ts line 12
    // Should I change boxersResource to 'boxerResource'?
    // Should the return on updateBoxer read 'this.BoxersResource.update' instead of 'save'

// i'm realizing its a little pointless to make all these changes when I cant log anything out.
