#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["EMart.BuyerService/EMart.BuyerService.csproj", "EMart.BuyerService/"]
RUN dotnet restore "EMart.BuyerService/EMart.BuyerService.csproj"
COPY . .
WORKDIR "/src/EMart.BuyerService"
RUN dotnet build "EMart.BuyerService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "EMart.BuyerService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "EMart.BuyerService.dll"]