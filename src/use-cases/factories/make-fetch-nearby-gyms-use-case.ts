import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms"
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository"

export function MakeFetchNearbyGymsUseCase() {
    const gymsInsRepository = new PrismaGymsRepository()
    const useCase = new FetchNearbyGymsUseCase(gymsInsRepository)

    return useCase
}