# PAW App

Whilst I'm learning how to build PWAs, I will develop this *useless* app, in the hopes that I learn from my mistakes
here and not in production 😬.

### Getting Setup (Dev)

Providing you're inside a UNIX shell, the following commands will get the app running on your your machine.

```bash
make install
make dev -j3
```

The dev server should now be up at [http://localhost:8081](http://localhost:8081).

### Building Release (Prod)

The following command will install, build and run the app. The app is run with the forever package to keep the process
running in the background. Console output and errors are logged to storage/out.log and storage/errors.log respectively.

```bash
make install
make build
make start
```
