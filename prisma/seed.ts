import { hashSync } from 'bcrypt'

import prisma from './prisma-client'

async function generate() {
  await prisma.category.createMany({
    data: [
      {
        name: 'Завтрак'
      },
      {
        name: 'Пиццы'
      },
      {
        name: 'Комбо'
      },
      {
        name: 'Закуски'
      },
      {
        name: 'Коктейли'
      },
      {
        name: 'Кофе'
      },
      {
        name: 'Напитки'
      },
    ]
  })
  await prisma.ingredient.createMany({
    data: [
      {
        name: 'Сырный бортик',
        price: 179,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png'
      },
      {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png'
      },
      {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796'
      },
      {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png'
      },
      {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A'
      },
      {
        name: 'Шампиньоны',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324'
      },
      {
        name: 'Бекон',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F'
      },
      {
        name: 'Ветчина',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61'
      },
      {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3'
      },
      {
        name: 'Острая чоризо',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027'
      },
      {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B'
      },
      {
        name: 'Свежие томаты',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67'
      },
      {
        name: 'Красный лук',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C'
      },
      {
        name: 'Итальянские травы',
        price: 39,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png'
      },
      {
        name: 'Сладкий перец',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B'
      },
      {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349'
      },
      {
        name: 'Митболы',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png'
      },
      {
        name: 'Баварские колбаски',
        price: 129,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee9d3660793feda24a236677d3013e.png'
      },
    ]
  })
  await prisma.product.createMany({
    data: [
      {
        name: 'Омлет с беконом',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970326512C89366583FF997CA9E.avif',
        categoryId: 1
      },
      {
        name: 'Омлет с ветчиной и грибами',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970321044479C1D1085457A36EB.avif',
        categoryId: 1
      },
      {
        name: 'Омлет с пепперони',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
        categoryId: 1
      },
      {
        name: 'Омлет сырный',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE797033873EB1B4B77F7E70BBA37E.avif',
        categoryId: 1
      },
      {
        name: 'Додстер с ветчиной',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7970259D888E98B6407EE6B994D9.avif',
        categoryId: 1
      },
      {
        name: 'Дэнвич ветчина и сыр',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796FF0059B799A17F57A9E64C725.avif',
        categoryId: 4
      },
      {
        name: 'Дэнвич чоризо барбекю',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE796FF041FE1F94C903576DCFD01E.avif',
        categoryId: 4
      },
      {
        name: 'Молочный коктейль Ежевика-малина',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EEB92C801211CBAF91BB30F77568C5.avif',
        categoryId: 5
      },
      {
        name: 'Молочный коктейль Пина Колада',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EEA69C98929AD79D1ADB5EF4CF22BB.avif',
        categoryId: 5
      },
      {
        name: 'Кофе Карамельный капучино',
        imageUrl: 'https://media.dodostatic.net/image/r:760x760/11EE7D61AED6B6D4BFDAD4E58D76CF56.avif',
        categoryId: 6
      },
    ]
  })
  const pizza1 = await prisma.product.create({
    data: {
      name: 'Бефстроганов',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
      categoryId: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
      }
    }
  })
  const pizza2 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
      categoryId: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
      }
    }
  })
  const pizza3 = await prisma.product.create({
    data: {
      name: 'Додо Микс',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
      categoryId: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]
      }
    }
  })
  await prisma.productVariant.createMany({
    data: [
      {
        productId: pizza1.id,
        price: 499,
        size: 25,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza1.id,
        price: 769,
        size: 30,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza1.id,
        price: 899,
        size: 35,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza1.id,
        price: 769,
        size: 30,
        type: 'THIN'
      },
      {
        productId: pizza1.id,
        price: 899,
        size: 35,
        type: 'THIN'
      },
      {
        productId: pizza2.id,
        price: 309,
        size: 25,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza2.id,
        price: 539,
        size: 30,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza2.id,
        price: 659,
        size: 35,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza2.id,
        price: 539,
        size: 30,
        type: 'THIN'
      },
      {
        productId: pizza2.id,
        price: 659,
        size: 35,
        type: 'THIN'
      },
      {
        productId: pizza3.id,
        price: 499,
        size: 25,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza3.id,
        price: 769,
        size: 30,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza3.id,
        price: 899,
        size: 35,
        type: 'TRADITIONAL'
      },
      {
        productId: pizza3.id,
        price: 769,
        size: 30,
        type: 'THIN'
      },
      {
        productId: pizza3.id,
        price: 899,
        size: 35,
        type: 'THIN'
      },
      // остальные продукты
      {
        productId: 1,
        price: 179,
      },
      {
        productId: 2,
        price: 179,
      },
      {
        productId: 3,
        price: 179,
      },
      {
        productId: 4,
        price: 179,
      },
      {
        productId: 5,
        price: 199,
      },
      {
        productId: 6,
        price: 269,
      },
      {
        productId: 7,
        price: 269,
      },
      {
        productId: 8,
        price: 220,
      },
      {
        productId: 9,
        price: 220,
      },
      {
        productId: 10,
        price: 159,
      },
    ]
  })
}

async function clear() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await clear()
    await generate()
  } catch (e) {
    console.log(e)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })